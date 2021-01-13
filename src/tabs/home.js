import React, { useContext } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import { AuthContext } from '../naviagtion/AuthProvider';
import FormButton from '../component/formButton';

const home = () =>  {
    const {user, logout} = useContext(AuthContext)
    return (
        <View>
            <Text>Welcome {user.uid}</Text>
            <Text>home</Text>
            <FormButton buttonTitle="Logout" onPress={() => logout()}/>
        </View>
    )
}

export default home
