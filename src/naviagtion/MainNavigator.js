import React from 'react'
import Home from '../tabs/home';
import Movie from '../tabs/movie';
import Profile from '../tabs/profile';
import Series from '../tabs/series';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const mainTab = createBottomTabNavigator();

const customTabBarStyle = {
  activeTintColor: "#935DFF",
  inactiveTintColor:"grey",
  style:{
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    height:70,
    paddingBottom:10
  },
  labelStyle: {
    fontSize: 12
  },
}

const MainNavigation = () => {
    return(
      <mainTab.Navigator
       initialRouteName="Home"
       tabBarOptions={customTabBarStyle}
       shifting="false">
        
        <mainTab.Screen name="Home" size={30} component={Home}
          options={{
            tabBarLabel:'Home',
            tabBarIcon: ({color}) => (
              <AntDesign size={25} name="home"  color={color}/>
            )
          }}
        />

        <mainTab.Screen name="Movies" size={30} component={Movie}
          options={{
            tabBarLabel:'Movies',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons size={25} name="movie"  color={color}/>
            )
          }}
        />
        
        <mainTab.Screen name="Series" size={30} component={Series}
          options={{
            tabBarLabel:'Series',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons size={25} name="movie-roll" color={color}/>
            )
          }}
        />

        <mainTab.Screen name="User" size={30} component={Profile}
          options={{
            tabBarLabel:'User',
            tabBarIcon: ({color}) => (
              <Feather size={25} name="user" color={color}/>
            )
          }}
        />

      </mainTab.Navigator>
    )
}

export default MainNavigation;