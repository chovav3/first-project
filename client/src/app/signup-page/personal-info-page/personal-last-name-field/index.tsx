import React, { FunctionComponent, useContext } from 'react'
import { TextField } from '@material-ui/core'
import { EUserType } from '../../../../models/user.model'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class PersonalLastNameFieldProps { }

const PersonalLastNameField: FunctionComponent<PersonalLastNameFieldProps> = () => {
  const
    { lastName, validity, errors, values } = useContext(SignupFormContext),
    { translate } = useContext(LanguageContext)
  return <>
    {
      values.type === EUserType.person ?
        <TextField required fullWidth
          {...lastName}
          helperText={errors.lastName}
          error={validity.lastName === false}
          label={translate.LAST_NAME}
          variant="outlined"
          margin="normal"
        />
        : ``
    }
  </>
}

export default PersonalLastNameField