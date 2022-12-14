import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import Menu from '../screens/menu'
// import ShoppingList from '../screens/shopping-list'

import { Menu, ShoppingList } from '../screens/'

import { ROUTES_LIST } from '../utils/'

const Stack = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Initial"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={ROUTES_LIST.MENU} component={Menu} />
                <Stack.Screen
                    name={ROUTES_LIST.SHOPPING_LIST}
                    component={ShoppingList}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
