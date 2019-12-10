import React, { FunctionComponent, useContext } from 'react'
import { Card, CardActions, CardContent, Container, Grid, Typography } from '@material-ui/core'
import AuthGuard from '../../auth-guard'
import { LanguageContext } from '../../context/language'
import CallingCodeField from './calling-code-field'
import ConfirmPasswordField from './confirm-password-field'
import EmailFieldSignup from './email-field-signup'
import ImageField from './image-field'
import NamedField from './named-field'
import PasswordFieldSignup from './password-field-signup'
import PersonalLastNameField from './personal-last-name-field'
import PhoneField from './phone-field'
import SignupPersonalFab from './signup-personal-fab'
import TermsAcceptedField from './terms-accepted-field'

export class PersonalInfoPageProps { }

const PersonalInfoPage: FunctionComponent<PersonalInfoPageProps> = () => {
    const
        { translate } = useContext(LanguageContext),
        { direction } = useContext(LanguageContext)
    return <AuthGuard onlyAuthenticated={false}>
        <Container maxWidth="sm">
            <Typography className="margin-top-9 fs-1.5 margin-bottom-0.5">{translate.PERSONALֹֹֹֹֹֹֹֻֻ_PAGE}</Typography>
            <Card>
                <CardContent>
                    <ImageField />
                    <NamedField />
                    <PersonalLastNameField />
                    <EmailFieldSignup />
                    {direction === 'rtl' ?
                        <Grid container spacing={3} >
                            <Grid item xs={8}><PhoneField /></Grid>
                            <Grid item xs={4}><CallingCodeField /></Grid>
                        </Grid>
                        : <Grid container spacing={3} >
                            <Grid item xs={4}><CallingCodeField /></Grid>
                            <Grid item xs={8}><PhoneField /></Grid>
                        </Grid>
                    }
                    <PasswordFieldSignup />
                    <ConfirmPasswordField />
                    <TermsAcceptedField />
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                        <Grid item>
                            <SignupPersonalFab />
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Container>
    </AuthGuard>
}

export default PersonalInfoPage