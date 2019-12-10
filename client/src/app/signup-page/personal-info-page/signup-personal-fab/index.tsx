import React, { FunctionComponent, useContext } from 'react'
import { Fab } from '@material-ui/core'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class SignupPersonalFabProps { }

const SignupPersonalFab: FunctionComponent<SignupPersonalFabProps> = () => {
  const
    { validPersonal, handleSubmit } = useContext(SignupFormContext),
    { translate } = useContext(LanguageContext)
  return <>
    <Fab
      className="w-9 margin-top-1 margin-bottom-1 "
      variant="extended"
      size="small"
      color="primary"
      disabled={!validPersonal}
      onClick={handleSubmit}
    >
      {translate.SIGNUP}
    </Fab>
  </>
}

export default SignupPersonalFab