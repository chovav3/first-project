import React, { FunctionComponent, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Container, Grid, Typography } from '@material-ui/core'
import AuthGuard from '../auth-guard'
import { LanguageContext } from '../context/language'
import LoginProviders from './context'
import EmailFieldLogin from './email-field-login'
import Footer from './footer'
import LoginFab from './login-fab'
import PasswordFieldLogin from './password-field-login'

export class LoginPageProps { }

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  const { translate } = useContext(LanguageContext)
  return <LoginProviders>
    <AuthGuard onlyAuthenticated={false}>
      <Container maxWidth="sm">
        <Typography className="margin-top-9 fs-1.5 margin-bottom-0.5">{translate.LOGIN}</Typography>
        <Card>
          <CardContent>
            <EmailFieldLogin />
            <PasswordFieldLogin />
            <Link to="" onFocus={({ target }) => target.click()}>{translate.FORGOT_PASSWOTD} &#8758;&#10098;</Link>
          </CardContent>
          <CardActions>
            <Grid container justify="center">
              <Grid item>
                <LoginFab />
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Container>
      <Typography align="center" className="margin-top-2">
        <Link to="/signup/business" onFocus={({ target }) => target.click()}>{translate.WANT_SIGNUP}</Link>
      </Typography>
      <Footer />
    </AuthGuard>
  </LoginProviders>
}

export default LoginPage