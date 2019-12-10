import React, { createContext, FunctionComponent, useContext, useEffect, useState } from 'react'
import { API_ENDPOINT } from '../../constants'
import { User } from '../../models/user.model'
import { LanguageContext } from './language'
import { UXContext } from './ux'

export class UserContextValue implements Partial<User> {
  _id: User['_id']
  loading: boolean
  loadingSuccess: boolean
  language: User['language']
  setUserData: (data: User) => void
}

export const UserContext = createContext(new UserContextValue)

const UserProvider: FunctionComponent = ({ children }) => {
  const
    languageContext = useContext(LanguageContext),
    { indicateError } = useContext(UXContext),
    [_id, setId] = useState<UserContextValue['_id']>(),
    [language, setLanguage] = useState<UserContextValue['language']>(),
    [loading, setLoading] = useState<UserContextValue['loading']>(),
    [loadingSuccess, setLoadingSuccess] = useState<UserContextValue['loadingSuccess']>()
  useEffect(
    () => {
      if (language) languageContext.setLanguage(language)
    },
    [language]
  )
  const _parseJSON = (response: any) => {
    return response.text().then((text: any) => {
      return text ? JSON.parse(text) : {}
    })
  }
  useEffect(
    () => {
      setLoading(true)
      fetch(`${API_ENDPOINT}/user`).
        then(async response => {
          if (!response.ok) throw response
          else if(await response.text()){
            const data: User = await response.json()
            setId(data._id)
            setLanguage(data.language)
          }
          setLoading(false)
          setLoadingSuccess(true)
        }).
        catch(e => {
          setLoading(false)
          setLoadingSuccess(false)
          indicateError(e)
          console.error(e)
        })
    },
    []
  )
  return <UserContext.Provider
    value={{
      _id, loading, loadingSuccess, language,
      setUserData: (data: User) => {
        if (data) {
          setId(data._id)
          setLanguage(data.language)
        }
      }
    }}
  >
    {children}
  </UserContext.Provider>
}

export default UserProvider