import React, { FunctionComponent, useContext } from 'react'
import { TextField } from '@material-ui/core'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class EmailFieldSignupProps { }

const EmailFieldSignup: FunctionComponent<EmailFieldSignupProps> = () => {
  const
    { email, validity, errors } = useContext(SignupFormContext),
    { translate } = useContext(LanguageContext)
  return <>
    <TextField required fullWidth
      {...email}
      helperText={errors.email}
      error={validity.email === false}
      label={translate.EMAIL}
      variant="outlined"
      type='email'
      margin="normal"
    />
  </>
}

export default EmailFieldSignup