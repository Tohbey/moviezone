import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import { AuthContext } from '../naviagtion/AuthProvider';
import Popular from '../component/movie/popular';


const home = () =>  {
    const {user, logout} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Popular />
            <View style={styles.nowPlaying}>
                <Text style={styles.header}>Now Playing</Text>
                <View>
                    <ScrollView>

                    </ScrollView>
                </View>
            </View>
        </View>
    )
}


export default home

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1,
        backgroundColor:'white'
    },
    header:{
        fontSize:20,
        color:'black',
        fontWeight:'700'
    },
    nowPlaying:{
        flex:1,
        padding:2,
        borderWidth: 2,
        borderColor: 'black'
    },

})

// {/* <Text>Welcome {user.uid}</Text>
// <Text>home</Text>
// <FormButton buttonTitle="Logout" onPress={() => logout()}/> */}
