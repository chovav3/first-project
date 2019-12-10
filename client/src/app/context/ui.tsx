import { create } from 'jss'
import rtl from 'jss-rtl'
import React, { createContext, FunctionComponent, useContext, useEffect } from 'react'
import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/styles'
import { LanguageContext } from './language'

export class UIContextValue { }
const
  jss = create({ plugins: [...jssPreset().plugins, rtl()] }),
  theme = createMuiTheme({
    direction: 'rtl',
    palette: {
      primary: { main: red[900] }, // Purple and green play nicely together.
      secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
  })
export const UIContext = createContext(new UIContextValue)
const UIProvider: FunctionComponent = ({ children }) => {
  const { direction } = useContext(LanguageContext)
  useEffect(
    () => {
      window.document.body.dir = direction
    },
    [direction]
  )
  return <UIContext.Provider value={{}}>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={{ ...theme, direction }}>
        {children}
      </ThemeProvider>
    </StylesProvider>
  </UIContext.Provider>
}

export default UIProvider