import React, { FunctionComponent, SyntheticEvent, useContext, useState } from 'react'
import { FormHelperText, TextField } from '@material-ui/core'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class ConfirmPasswordFieldProps { }

const ConfirmPasswordField: FunctionComponent<ConfirmPasswordFieldProps> = () => {
    const
        { passwordConfirm, values, errors, validity } = useContext(SignupFormContext),
        { translate } = useContext(LanguageContext)
    return <>
        <TextField required fullWidth
            {...passwordConfirm}
            helperText={values.passwordConfirm && values.passwordConfirm !== values.password ? `${translate.CONFIRM_PASSWORD}` : '' || errors.passwordConfirm}
            error={values.passwordConfirm && values.passwordConfirm !== values.password || validity.passwordConfirm === false}
            type="password"
            label={translate.PASSWORD_CONFIRM}
            variant="outlined"
            margin="normal"
        />
    </>
}

export default ConfirmPasswordField