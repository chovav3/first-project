import React, { FunctionComponent, useContext } from 'react'
import { TextField } from '@material-ui/core'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class DescriptionFieldProps { }

const DescriptionField: FunctionComponent<DescriptionFieldProps> = () => {
  const { desc } = useContext(SignupFormContext)
  const languageContext = useContext(LanguageContext)
  return <>
    <TextField
      {...desc}
      label={languageContext.translate.DESCRIPTION}
      variant="outlined"
      multiline
      fullWidth
      margin="normal"
    />
  </>
}

export default DescriptionField