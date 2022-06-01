import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Profissionais from '../screens/Profissionais'
import Tabs from '../stacks/Tabs'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator
        initialRouteName='Preload'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Profissionais" component={Profissionais} />
        <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
)