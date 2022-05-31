import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStack from './src/stacks/MainStack.js'
import UserContextProvider from './src/contexts/UserContext'

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  )
}