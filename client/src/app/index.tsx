import React, { FunctionComponent } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import AppProviders from './context'
import Header from './header'
import LoginPage from './login-page'
import MainPage from './main-page'
import SignupPage from './signup-page'

const App: FunctionComponent = () => {
  return <AppProviders>
    <CssBaseline />
    <Header />
      <BrowserRouter>
      <Route path="" exact component={MainPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage}/>
    </BrowserRouter>
  </AppProviders>

}

export default App
