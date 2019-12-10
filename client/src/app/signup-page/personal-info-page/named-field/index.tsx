import React, { FunctionComponent, useContext } from 'react'
import { TextField } from '@material-ui/core'
import { EUserType } from '../../../../models/user.model'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class NamedFieldProps { }

const NamedField: FunctionComponent<NamedFieldProps> = () => {
  const
    { named, validity, errors, values } = useContext(SignupFormContext),
    { translate } = useContext(LanguageContext)
  return <>
    <TextField required fullWidth
      {...named}
      helperText={errors.named}
      error={validity.named === false}
      label={values.type === EUserType.person ? translate.FIRST_NAME : translate.NAME}
      variant="outlined"
      margin="normal"
    />
  </>
}

export default NamedField