import React, { ChangeEvent, createContext, FunctionComponent, useContext, useState } from 'react'
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, Typography } from '@material-ui/core'
import { EUserType } from '../../../../models/user.model'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class TypeFieldProps {
}

const TypeField: FunctionComponent<TypeFieldProps> = () => {
  const
    { type, values } = useContext(SignupFormContext),
    { translate } = useContext(LanguageContext)
  return <>
    <div className="flex">
      <Typography className="margin-start-start-0.5 margin-top-2.2 fs-1.3">{translate.TYPE}</Typography>
      <FormControl
        required
        {...type}
      >
        <RadioGroup row className="margin-start-start-6 margin-top-2" defaultValue={values.type === EUserType.company ? EUserType.company : EUserType.person}>
          <FormControlLabel
            value={EUserType.person}
            control={<Radio />}
            label={translate.PERSONAL_USER}
          />
          <FormControlLabel className="margin-start-start-1.5"
            value={EUserType.company}
            control={<Radio />}
            label={translate.COMPANY}
          />
        </RadioGroup>
      </FormControl>
    </div>
  </>
}

export default TypeField