import React, { FunctionComponent, useContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BusinessInfoPage from './business-info-page'
import SignupProviders from './context'
import PersonalInfoPage from './personal-info-page'

export class SignupPageProps { }

const SignupPage: FunctionComponent<SignupPageProps> = () => {

  return <>
    <SignupProviders>
      <BrowserRouter>
        <Route path="/signup/business" component={BusinessInfoPage} />
        <Route path="/signup/personal" component={PersonalInfoPage} />
      </BrowserRouter>
    </SignupProviders>
  </>
}

export default SignupPage