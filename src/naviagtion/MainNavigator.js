import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import MovieDetail from '../screens/movieDetail';
import SerieDetail from '../screens/serieDetail';

const mainStack = createStackNavigator();

const MainNavigation = () => {
    return(
      <mainStack.Navigator>
          <mainStack.Screen name="Tab" options={{headerShown:false}}
            children={TabNavigation} />
          <mainStack.Screen name="movieDetail" component={MovieDetail} options={{headerShown: false}}/>
          <mainStack.Screen name="serieDetail" component={SerieDetail} options={{headerShown: false}}/>
      </mainStack.Navigator>
    )
}

export default MainNavigation;