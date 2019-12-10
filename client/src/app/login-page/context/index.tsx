import React, { FunctionComponent } from 'react'
import LoginFormProvider from './login-form'

const LoginProviders: FunctionComponent = ({ children }) => {
    return <LoginFormProvider>{children}</LoginFormProvider>
}

export default LoginProviders