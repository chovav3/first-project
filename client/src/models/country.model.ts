import { Currency } from './currency.model'
import { Nation } from './nation.model'

export class Country extends Nation {
  currencies: Array<Currency>
  languages: Array<{
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }>
  callingCodes?: Array<number>
  population?: number
}

export enum ECounty {
  currencies = 'currencies',
  languages = 'languages',
  callingCodes = 'callingCodes',
  population = 'population'
}