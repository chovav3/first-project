import React, { FunctionComponent, useContext } from 'react'
import { TextField } from '@material-ui/core'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class PasswordFieldSignupProps { }

const PasswordFieldSignup: FunctionComponent<PasswordFieldSignupProps> = () => {
    const
        { password, validity, errors } = useContext(SignupFormContext),
        { translate } = useContext(LanguageContext)
    return <>
        <TextField required fullWidth
            {...password}
            helperText={errors.password}
            error={validity.password === false}
            type="password"
            label={translate.PASSWORD}
            variant="outlined"
            margin="normal"
        />
    </>
}

export default PasswordFieldSignup