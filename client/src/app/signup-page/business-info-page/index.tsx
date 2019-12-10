import React, { FunctionComponent, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core'
import AuthGuard from '../../auth-guard'
import { LanguageContext } from '../../context/language'
import DescriptionField from './description-field'
import LofoField from './logo-field'
import SignupBusinessFab from './signup-business-fab'
import TypeField from './type-field'
import WebsiteField from './website-field'

export class BusinessInfoPageProps { }

const BusinessInfoPage: FunctionComponent<BusinessInfoPageProps> = () => {
    const { translate } = useContext(LanguageContext)
    return <AuthGuard onlyAuthenticated={false}>
        <Container maxWidth="sm">
            <Typography className="margin-top-9 fs-1.5 margin-bottom-0.5">{translate.BUSINESSֹֹֹֹֹֹֹֻֻ_PAGE}</Typography>
            <Card>
                <CardContent>
                    <CardMedia>
                        <LofoField />
                    </CardMedia>
                    <WebsiteField />
                    <DescriptionField />
                    <TypeField />
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                        <Grid item>
                            <SignupBusinessFab />
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Container>
        <Typography align="center" className="margin-top-2 margin-bottom-2">
            <Link to="/login" onFocus={({ target }) => target.click()}>{translate.ALREADY_HAVE_AN_ACCOUNT}</Link>
        </Typography>
    </AuthGuard>
}

export default BusinessInfoPage