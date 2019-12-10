import React, { FunctionComponent, useContext, useEffect, useMemo } from 'react'
import { TextField } from '@material-ui/core'
import { useExpressionEffect } from '../../../../helpers/use-expression-effect'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class PhoneFieldProps { }

const PhoneField: FunctionComponent<PhoneFieldProps> = () => {
    const
        { phone, setPhone, phoneInvalid, setPhoneInvalid } = useContext(SignupFormContext),
        { translate } = useContext(LanguageContext)
    useExpressionEffect(() => setPhoneInvalid(phone < 99999990), [phone])
    return <>
        <TextField required fullWidth
            inputProps={{ className: "appearance-none margin-0" }}
            value={phone || ``}
            label={translate.PHONE}
            variant="outlined"
            type="number"
            margin="normal"
            autoComplete="off"
            onInput={({ target }: React.ChangeEvent<HTMLInputElement>) => {
                const
                    { value } = target,
                    maxLength = value.startsWith(`0`) ? 11 : 10
                target.value = value.length === maxLength ? value.slice(0, maxLength - 1) : value
            }}
            onChange={({ target: { value } }) => setPhone(+value)}
            onKeyDown={(e) => {
                if (["e", "E", "+", "-", "."].includes(e.key)) e.preventDefault()
            }}
            helperText={phoneInvalid ? translate.PHONE_FIELD_ERROR : ''}
            error={phoneInvalid}
            onBlur={() => {
                if (!phone) setPhoneInvalid(true)
            }}
        />
    </>
}

export default PhoneField