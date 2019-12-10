import React, { FunctionComponent, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Typography } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class TermsAcceptedFieldProps { }

const TermsAcceptedField: FunctionComponent<TermsAcceptedFieldProps> = () => {
  const
    { termsAccepted, validity, errors, values } = useContext(SignupFormContext),
    { translate } = useContext(LanguageContext)
  return <>
    <div className="flex">
      <Link
        to=""
        onFocus={({ target }) => target.click()}
        className="absolute margin-start-start-7.8 fs-1 margin-top-3"
      >
        {translate.TERMS_OF_USE}
      </Link>
      <FormControl
        error={validity.termsAccepted === false}
        {...termsAccepted}
      >
        <FormControlLabel
          className="margin-start-start-minus-0.5 margin-top-2.4"
          label={translate.I_ACCEPT}
          control={
            <Checkbox required
              checked={values.termsAccepted === true}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
            />
          }
        />
        <FormHelperText className="margin-start-start-2 margin-top-minus-0.3">{errors.termsAccepted}</FormHelperText>
      </FormControl>
    </div>
  </>
}

export default TermsAcceptedField 