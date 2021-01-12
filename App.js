import { registerRootComponent } from 'expo';
import React from 'react';
import 'react-native-gesture-handler';
import Providers from './src/naviagtion';

export default function App() {
  return(
    <Providers />
  )
}

registerRootComponent(App)