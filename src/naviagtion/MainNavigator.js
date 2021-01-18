import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';

const mainStack = createStackNavigator();

const MainNavigation = () => {
    return(
      <mainStack.Navigator>
          <mainStack.Screen name="Tab" options={{headerShown:false}}
            children={TabNavigation} />
      </mainStack.Navigator>
    )
}

export default MainNavigation;