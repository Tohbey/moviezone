import React, { useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome';
import Login from '../auth/login';
import SignUp from '../auth/signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const AuthStack = createStackNavigator();


const AuthNavigator = () => {
    let routeName;
    const [isFirstLaunch, setisFirstLaunch] = useState(null)

    useEffect(() => {
      AsyncStorage.getItem("alreadyLaunched").then(value => {
        if(value == null){
          AsyncStorage.setItem('alreadyLaunched','true')
          setisFirstLaunch(true)
        }else{
          setisFirstLaunch(false)
        }
      })
    },[])

    if(isFirstLaunch == null){
      return null
    }else if(isFirstLaunch === true){
      routeName = 'Welcome'
    }else{
      routeName = 'Login'
    }
 
    return(
      <AuthStack.Navigator initialRouteName={routeName}>
        <AuthStack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
        <AuthStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <AuthStack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: 'white',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="white"
                  color="#333"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            ),
          })}
        />
      </AuthStack.Navigator>
    )
}

export default AuthNavigator;