import React, { useContext, useState, useEffect } from 'react'
import {  NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNaviagtor';
import MainNavigation from './MainNavigator';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
import { Provider } from 'react-redux';
import configureStore from '../redux/store'

const store = configureStore()

const Routes = ()  => {
    const { user, setuser } = useContext(AuthContext)
    const [initializing, setinitializing] = useState(true)

    const authStateChanged = (user) => {
        setuser(user)
        if(initializing){ 
            setinitializing(false)
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(authStateChanged)
        return subscriber;
    },[])

    if(initializing) return null;


    return (
        <Provider store={store}>
            <NavigationContainer>
                { user ? <MainNavigation /> : <AuthNavigator /> }
            </NavigationContainer>
        </Provider>
    )
}

export default Routes
