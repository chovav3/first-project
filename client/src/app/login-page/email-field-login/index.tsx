import classes from '*.module.css'
import React, { FunctionComponent, useContext, useState } from 'react'
import { TextField } from '@material-ui/core'
import { LanguageContext } from '../../context/language'
import { LoginFormContext } from '../context/login-form'

export class EmailFieldLoginProps { }

const EmailFieldLogin: FunctionComponent<EmailFieldLoginProps> = () => {
    const { email, validity, errors } = useContext(LoginFormContext)
    const languageContext = useContext(LanguageContext)
    return <>
        <TextField {...email} fullWidth autoFocus required
            helperText={errors.email}
            error={validity.email === false}
            label={languageContext.translate.EMAIL}
            variant="outlined"
        />
    </>
}

export default EmailFieldLogin