import React, { FunctionComponent, useContext } from 'react'
import { TextField } from '@material-ui/core'
import { LanguageContext } from '../../context/language'
import { LoginFormContext } from '../context/login-form'

export class PasswordFieldLoginProps { }

const PasswordFieldLogin: FunctionComponent<PasswordFieldLoginProps> = () => {
  const { password, validity, errors } = useContext(LoginFormContext)
  const languageContext = useContext(LanguageContext)

  return <>
    <TextField
      {...password}
      error={validity.password === false}
      helperText={errors.password}
      label={languageContext.translate.PASSWORD}
      variant="outlined"
      required
      fullWidth
      margin="normal"
    />
  </>
}

export default PasswordFieldLogin