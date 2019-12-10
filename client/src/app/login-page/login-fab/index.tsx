import React, { FunctionComponent, useContext } from 'react'
import { Fab } from '@material-ui/core'
import { LanguageContext } from '../../context/language'
import { LoginFormContext } from '../context/login-form'

export class LoginFabProps { }

const LoginFab: FunctionComponent<LoginFabProps> = () => {
  const
    { valid, handleSubmit } = useContext(LoginFormContext),
    { translate } = useContext(LanguageContext)
  return <>
    <Fab
      className="w-9  margin-top-2 margin-bottom-1 "
      variant="extended"
      size="small"
      color="primary"
      disabled={!valid}
      onClick={handleSubmit}
    >
      {translate.LOGIN}
    </Fab>
  </>
}

export default LoginFab