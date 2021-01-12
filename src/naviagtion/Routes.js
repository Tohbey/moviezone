import React from 'react'
import {  NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNaviagtor'

const Routes = ()  => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default Routes
