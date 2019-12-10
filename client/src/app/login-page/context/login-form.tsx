import every from 'lodash/every'
import React, { createContext, FunctionComponent, useContext, useEffect, useState } from 'react'
import { BaseInputProps, StateErrors, StateValidity, useFormState } from 'react-use-form-state'
import { API_ENDPOINT } from '../../../constants'
import { LanguageContext } from '../../context/language'
import { UserContext } from '../../context/user'
import { UXContext } from '../../context/ux'

export class LoginFormContextValue {
  email: BaseInputProps<any>
  password: BaseInputProps<any>
  valid: boolean
  validity: StateValidity<any>
  errors: StateErrors<any, string>
  submitting: boolean
  submittingSuccess: boolean
  handleSubmit: () => void
}

export const LoginFormContext = createContext(new LoginFormContextValue)

const LoginFormProvider: FunctionComponent = ({ children }) => {
  const
    [{ errors, validity, values }, { email, password }] = useFormState(),
    [submitting, setSubmitting] = useState<LoginFormContextValue['submitting']>(null),
    [submittingSuccess, setSubmittingSuccess] = useState<LoginFormContextValue['submittingSuccess']>(null),
    { indicateError, startAsyncOperation, endAsyncOpration } = useContext(UXContext),
    { setUserData } = useContext(UserContext),
    { translate } = useContext(LanguageContext),
    handleSubmit = async () => {
      setSubmitting(true)
      // await new Promise(resolve=>setTimeout(resolve, 1000))
      try {
        const
          response = await fetch(`${API_ENDPOINT}/user/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              password: values.password,
              email: values.email
            })
          })
        if (!response.ok) throw { message: translate.LOGIN_ERROR }
        const data = await response.json()
        setSubmitting(false)
        setSubmittingSuccess(true)
        setUserData(data)
      }
      catch (error) {
        setSubmitting(false)
        setSubmittingSuccess(false)
        indicateError({ message: error.message || undefined })
        console.error(error)
      }
    }
  useEffect(
    () => {
      if (submitting !== null) {
        submitting ? startAsyncOperation() : endAsyncOpration()
      }
    },
    [submitting]
  )
  return <LoginFormContext.Provider
    value={{
      validity, errors, handleSubmit, submitting, submittingSuccess,
      email: email(`email`),
      password: password(`password`),
      valid: every(values) && every(validity),
    }}
  >
    {children}
  </LoginFormContext.Provider>
}

export default LoginFormProvider