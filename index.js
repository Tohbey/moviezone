import React from 'react'
import App from './App';
import {name as appName } from './app.json';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store'

const store = configureStore()

const app = () => {
    return(
        <App />
    )
}

AppRegistry.registerComponent('main', () => app);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);
