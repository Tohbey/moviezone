import React, { useState } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';
import FormInput from '../component/formInput';
import FormButton from '../component/formButton';
import SocialButton from '../component/socialButton';


const signUp = (props) =>  {
    let navigation = props.navigation;
    const [signUpDetail, setsignUpDetail] = useState({
        name:"",
        email:"",
        password:""
    })

    const submit = () => {
        if(signUpDetail.name === "" || signUpDetail.email === "" || signUpDetail.password === ""){
           return alert("full name or email or password missing")
        }
        console.log(signUpDetail)
    }

    return (
        <KeyboardAvoidingView>
            <ScrollView scrollEnabled={false}>
                <View style={styles.container}>
                    <Text style={styles.text}>Create an account</Text>
                    
                    <FormInput 
                        labelValue={signUpDetail.name}
                        onChangeText={(e) => {}}
                        placeholderText="Name"
                        iconType="user"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput 
                        labelValue={signUpDetail.email}
                        onChangeText={(e) => {}}
                        placeholderText="Email"
                        iconType="mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput 
                        labelValue={signUpDetail.password}
                        onChangeText={(e) => {}}
                        placeholderText="Password"
                        iconType="lock"
                        secureTextEntry={true}
                    />

                    <FormButton 
                        buttonTitle="Sign Up"
                    />

                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By registering, you confirm that you accept our{' '}
                        </Text>
                        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                            Terms of service
                        </Text>
                        </TouchableOpacity>
                        <Text style={styles.color_textPrivate}> and </Text>
                        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                            Privacy Policy
                        </Text>
                    </View>

                    <View>
                        <SocialButton
                            buttonTitle="Sign In with Facebook"
                            btnType="facebook"
                            color="#4867aa"
                            backgroundColor="#e6eaf4"
                        />

                        <SocialButton
                            buttonTitle="Sign In with Google"
                            btnType="google"
                            color="#de4d41"
                            backgroundColor="#f5e7ea"
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.forgotButton}
                        onPress={() => props.navigation.navigate('Login')}>
                        <Text style={styles.navButtonText}>
                            Have an account? Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>   
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 30,
        backgroundColor:'white'
    },
    topHolder:{
        flexDirection:'row',
        alignItems:'center'
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
})

export default signUp
