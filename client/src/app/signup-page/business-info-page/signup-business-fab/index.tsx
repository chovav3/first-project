import React, { FunctionComponent, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Fab } from '@material-ui/core'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class SignupBusinessFabProps { }

const SignupBusinessFab: FunctionComponent<SignupBusinessFabProps> = () => {
  const
    { siteValidity } = useContext(SignupFormContext),
    { translate } = useContext(LanguageContext)
  return <>
    <Fab
      className="w-9  margin-top-1 margin-bottom-1"
      variant="extended"
      size="small"
      color="primary"
      disabled={!siteValidity}
      component={Link}
      to="/signup/personal"
    >
      {translate.NEXT}
    </Fab>
  </>
}

export default SignupBusinessFab