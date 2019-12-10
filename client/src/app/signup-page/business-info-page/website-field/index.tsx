import React, { FunctionComponent, useContext, useEffect, useRef } from 'react'
import { TextField } from '@material-ui/core'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class WebsiteFieldProps { }

const WebsiteField: FunctionComponent<WebsiteFieldProps> = () => {
  const
    { site, siteValidity } = useContext(SignupFormContext),
    { translate } = useContext(LanguageContext)
  return <>
    <TextField
      {...site}
      error={!siteValidity}
      helperText={siteValidity ? `` : translate.ERROR_URL}
      label={translate.WEBSITE}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  </>
}

export default WebsiteField