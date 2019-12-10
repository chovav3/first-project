import React, { FunctionComponent, useContext } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { LanguageContext } from '../context/language'

const Header: FunctionComponent = () => {
  const {translate} = useContext(LanguageContext)
  return <>
    <AppBar position="fixed" color="primary" className="z-1300">
      <Toolbar>
        <Typography variant="h6">
          {translate.APP_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
  </>
}

export default Header