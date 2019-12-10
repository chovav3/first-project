import React, { FunctionComponent } from 'react'
import CurrenciesProvider from './currencies'
import LanguageProvider from './language'
import UIProvider from './ui'
import UserProvider from './user'
import UXProvider from './ux'

const AppProviders: FunctionComponent = ({ children }) => {
  return <LanguageProvider>
    <UXProvider>
      <UserProvider>
        <CurrenciesProvider>
          <UIProvider>{children}</UIProvider>
        </CurrenciesProvider>
      </UserProvider>
    </UXProvider>
  </LanguageProvider>
}

export default AppProviders