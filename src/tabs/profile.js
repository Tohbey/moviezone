import React, { useContext } from 'react'
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { AuthContext } from '../naviagtion/AuthProvider';
import FormButton from '../component/UI/formButton';
import WhiteButton from '../component/UI/whiteButton';

const profile = (props) =>  {
    const {user, logout} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Account</Text>
            </View>
            <View style={styles.user}>
                <Text style={styles.textMain}>Welcome</Text>
                <Text>{user.email}</Text>
            </View>
            <View>
                <Text style={styles.text}>My Movie-Zone Account</Text>
                <WhiteButton buttonTitle="Watchlist" />
                <WhiteButton buttonTitle="List" />
                <WhiteButton buttonTitle="Rating" />
                <WhiteButton buttonTitle="Favorites" />
            </View>
            <View>
                <Text style={styles.text}>My settings</Text>
                <WhiteButton buttonTitle="Details" />
                <WhiteButton buttonTitle="Change Password" />
            </View>
            <View style={styles.buttonHolder}>
                <FormButton buttonTitle="Logout" onPress={() => logout()}/> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        padding:5,
        height:50,
        backgroundColor:'black',
        flexDirection:'row'
    },
    headerText:{
        color:'white',
        fontSize:20,
        marginLeft:'auto',
        marginRight:'auto',
        alignSelf:'center'
    },
    user:{
        padding:5,
        height:50,
        backgroundColor:'gray',
    },
    textMain:{
        fontSize:16,
        color: '#935DFF',
        fontWeight:'700'
    },
    text:{
        padding:10,
        fontSize:16,
    },
    buttonHolder:{
        position:'absolute',
        bottom:10,
        width:'100%'
    }
})

export default profile
