import remove from 'lodash/remove'
import React, { createContext, FunctionComponent, useContext, useEffect, useState } from 'react'
import { Country } from '../../models/country.model'
import { LanguageContext } from './language'

export class CurrenciesContextValue {
  data: Array<Country>
  defaultCallingCode: number
  defaultCurrency: string
}

export const CurrenciesContext = createContext(new CurrenciesContextValue)

const CurrenciesProvider: FunctionComponent = ({ children }) => {
  const
    [data, setData] = useState<CurrenciesContextValue['data']>([]),
    [defaultCallingCode, setDefaultCallingCode] = useState<CurrenciesContextValue['defaultCallingCode']>(),
    [defaultCurrency, setDefaultCurrency] = useState<CurrenciesContextValue['defaultCurrency']>(),
    { browserLanguage } = useContext(LanguageContext)

  useEffect(
    () => {
      fetch(`https://restcountries.eu/rest/v2/all?fields=name;nativeName;callingCodes;population;currencies;languages;flag`).
        then(async respones => {
          const result: Array<Country> = await respones.json()
          for (const { callingCodes } of result) {
            for (let index = 0; index < callingCodes.length; ++index) callingCodes[index] = +(callingCodes[index] as any).replace(/\s+/g, ``)
            remove(callingCodes, (callingCode) => !callingCode)
          }
          remove(result, ({ callingCodes, population }) => !callingCodes.length || !population)
          for (const { currencies } of result) remove(currencies, ({ code, name: currencyName }) => !code || !currencyName || code === `(none)`)
          result.sort((a, b) => b.population - a.population)
          setData(result)

          const
            matchesCountries = result.filter(({ languages }) => languages.some(({ iso639_1 }) => iso639_1 === browserLanguage)),
            matchesCountriesFirstLanguage = matchesCountries.filter(({ languages: [{ iso639_1 }] }) => iso639_1 === browserLanguage)
          if (matchesCountriesFirstLanguage.length) matchesCountries.slice(0, 1).map(value => {
            setDefaultCurrency(value.nativeName)
            setDefaultCallingCode(+value.callingCodes)
          })
          else result.slice(0, 1).map((value) => {
            setDefaultCurrency(value.nativeName)
            setDefaultCallingCode(+value.callingCodes)
          })
        })
    },
    []
  )
  return <CurrenciesContext.Provider value={{ data, defaultCallingCode, defaultCurrency }}>{children}</CurrenciesContext.Provider>
}

export default CurrenciesProvider