import React, { FunctionComponent, useContext } from 'react'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import { LanguageContext } from '../../context/language'

export class FooterProps { }

const Footer: FunctionComponent<FooterProps> = () => {
  const {translate} = useContext(LanguageContext)
  
  return <>
    <footer>
      <AppBar position="fixed" className="bottom top-auto">
        <img className="absolute right top margin-top-minus-3.5 margin-right-6" src="/images/login-clouds.png" width="200" />
        <Toolbar>
          <Container maxWidth="lg">
            <Typography
              align="center"
              className="h-10 flex-center fs-2.7"
            >
              {translate.APP_FOOTER}
           </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </footer>

  </>
}

export default Footer