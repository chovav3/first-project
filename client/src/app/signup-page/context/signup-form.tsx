import React, { createContext, Dispatch, FunctionComponent, SetStateAction, useContext, useEffect, useState } from 'react'
import { BaseInputProps, CheckboxProps, FormState, Inputs, RadioProps, StateErrors, StateValidity, StateValues, useFormState } from 'react-use-form-state'
import { API_ENDPOINT } from '../../../constants'
import { EPersonKey, Person } from '../../../models/person.model'
import { EUserKey, EUserType, User } from '../../../models/user.model'
import { LanguageContext } from '../../context/language'
import { UserContext } from '../../context/user'
import { UXContext } from '../../context/ux'

type fields = { [key in keyof User]: any } & { [key in keyof Person]: any } & {
  termsAccepted: any
  passwordConfirm: any
}

export class SignupFormContextValue implements Partial<fields> {
  desc: Pick<BaseInputProps<User['desc']>, "id" | "onChange" | "onBlur" | "value" | "name">
  callingCode: User['callingCode']
  setCallingCode: Dispatch<SetStateAction<this['callingCode']>>
  currency: User['currency']
  setCurrency: Dispatch<SetStateAction<this['currency']>>
  phone: User['phone']
  setPhone: Dispatch<SetStateAction<this['phone']>>
  email: BaseInputProps<User['email']>
  named: BaseInputProps<User['password']>
  site: BaseInputProps<User['site']>
  type: RadioProps<User['type']>
  password: BaseInputProps<User['password']>
  passwordConfirm: BaseInputProps<User['password']>
  lastName: BaseInputProps<Person['lastName']>
  image: User['image']
  setImage: Dispatch<SetStateAction<this['image']>>
  logo: User['logo']
  setLogo: Dispatch<SetStateAction<this['logo']>>
  termsAccepted: CheckboxProps<boolean>
  handleSubmit: () => void
  validity: StateValidity<fields>
  errors: StateErrors<fields, string>
  siteValidity: boolean
  values: StateValues<any>
  validPersonal: boolean
  formState: FormState<fields, StateErrors<any, string>>
  phoneInvalid: boolean
  setPhoneInvalid: Dispatch<SetStateAction<this['phoneInvalid']>>
  submitting: boolean
  submittingSuccess: boolean
}

export const SignupFormContext = createContext(new SignupFormContextValue)

const SignupFormProvider: FunctionComponent = ({ children }) => {
  const
    { setUserData } = useContext(UserContext),
    { indicateError, startAsyncOperation, endAsyncOpration } = useContext(UXContext),
    [submitting, setSubmitting] = useState<SignupFormContextValue['submitting']>(null),
    [submittingSuccess, setSubmittingSuccess] = useState<SignupFormContextValue['submittingSuccess']>(null),
    { language } = useContext(LanguageContext),
    [currency, setCurrency] = useState<SignupFormContextValue['currency']>(``),
    [image, setImage] = useState<SignupFormContextValue['image']>(``),
    [logo, setLogo] = useState<SignupFormContextValue['logo']>(``),
    [phone, setPhone] = useState<SignupFormContextValue['phone']>(),
    [callingCode, setCallingCode] = useState<SignupFormContextValue['callingCode']>(0),
    [phoneInvalid, setPhoneInvalid] = useState<SignupFormContextValue['phoneInvalid']>(false),
    { translate } = useContext(LanguageContext),
    [formState, { email, password, url, text, radio, textarea, checkbox }]: [FormState<fields, StateErrors<any, string>>, Inputs<any, string | number | symbol>] = useFormState({
      type: EUserType.person
    }),
    { validity, values, errors } = formState,
    userValid = values.password && values.named && values.email && validity.email && values.passwordConfirm === values.password && values.termsAccepted === true && phone !== undefined && (phone + '').length === 9,
    handleSubmit = async () => {
      setSubmitting(true)
      try {
        const
          response = await fetch(`${API_ENDPOINT}/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              image,
              logo,
              person: { lastName: values.lastName },
              named: values.named,
              password: values.password,
              phone: phone,
              email: values.email,
              desc: values.desc,
              callingCode: callingCode,
              currency: currency,
              site: values.site,
              type: values.type,
              language: language,
            })
          })
        if (!response.ok) throw { message: translate.SIGNUP_ERROR }
        setUserData(await response.json())
        setSubmitting(false)
        setSubmittingSuccess(true)
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
  return <SignupFormContext.Provider
    value={{
      submitting, submittingSuccess, image, setImage, logo, setLogo, callingCode, setCallingCode, currency, setCurrency, setPhone, phone, phoneInvalid: phoneInvalid, setPhoneInvalid: setPhoneInvalid,
      handleSubmit, validity, errors, formState,
      desc: textarea(EUserKey.desc),
      email: email(EUserKey.email),
      named: text(EUserKey.named),
      site: url(EUserKey.site),
      type: radio(EUserKey.type, EUserType.person),
      password: password(EUserKey.password),
      passwordConfirm: password(`passwordConfirm`),
      lastName: text(EPersonKey.lastName),
      termsAccepted: checkbox(`termsAccepted`),
      siteValidity: !values.site || values.site.includes(`.`),
      values,
      validPersonal:
        values.type === EUserType.person ?
          userValid && values.lastName :
          userValid,
    }}
  >
    {children}
  </SignupFormContext.Provider>
}

export default SignupFormProvider