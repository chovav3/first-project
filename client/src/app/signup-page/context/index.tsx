import React, { FunctionComponent } from 'react'
import SignupFormProvider from './signup-form'

const SignupProviders: FunctionComponent = ({ children }) => {
  return <SignupFormProvider>{children}</SignupFormProvider>
}

export default SignupProviders