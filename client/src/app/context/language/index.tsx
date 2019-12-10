import React, { createContext, FunctionComponent, useContext, useEffect, useState } from 'react'
import { ELanguage, User } from '../../../models/user.model'
import { UserContext } from '../user'
import en from './en'
import he from './he'

export class LanguageContextValue implements Partial<User> {
  language: ELanguage
  setLanguage: React.Dispatch<React.SetStateAction<ELanguage>>
  direction: 'rtl' | 'ltr'
  translate: typeof he | typeof en
  browserLanguage: string
}

export const LanguageContext = createContext(new LanguageContextValue)

const
  determineDirectionBy = (language: ELanguage) => {
    switch (language) {
      case ELanguage.he: return `rtl`
      default: return `ltr`
    }
  },
  determineTranslateBy = (language: ELanguage) => {
    switch (language) {
      case ELanguage.he: return he
      default: return en
    }
  },
  LanguageProvider: FunctionComponent = ({ children }) => {
    const
      browserLanguage = window.navigator.language.slice(0, 2),
      [language, setLanguage] = useState<LanguageContextValue['language']>(ELanguage[browserLanguage] || ELanguage.en),
      [direction, setDirection] = useState<LanguageContextValue['direction']>(determineDirectionBy(language)),
      [translate, setTranslate] = useState<LanguageContextValue['translate']>(determineTranslateBy(language))
    useEffect(
      () => {
        setDirection(determineDirectionBy(language))
        setTranslate(determineTranslateBy(language))
      },
      [language]
    )
    return <LanguageContext.Provider value={{ language, direction, translate, browserLanguage, setLanguage }}>{children}</LanguageContext.Provider>
  }

export default LanguageProvider