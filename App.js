import { registerRootComponent } from 'expo';
import React from 'react';
import 'react-native-gesture-handler';
import Providers from './src/naviagtion';
import initialApp from './setup';

export default function App() {
  initialApp()
  return(
    <Providers />
  )
}

registerRootComponent(App)