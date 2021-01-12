import React, { useState } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import popcorn from '../assests/popcorn.png';
import video from '../assests/video.png';
import videoCamera from '../assests/video-camera.png';
import camera from '../assests/camera.png';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'

    return(
        <View 
            style={{
                width:15,
                height:6,
                marginHorizontal:3,
                backgroundColor,
                borderRadius:3
            }} 
        />
    )
}

const Next = ({...props}) => (
    <TouchableWithoutFeedback
        style={{marginHorizontal:4}}
        {...props}
    >
        <Text style={{fontSize:16,paddingRight:15}}>Next</Text>
    </TouchableWithoutFeedback>
);

const Skip = ({...props}) => (
    <TouchableWithoutFeedback
        style={{marginHorizontal:4}}
        {...props}
    >
        <Text style={{fontSize:16,paddingLeft:15}}>Skip</Text>
    </TouchableWithoutFeedback>
);

const Done = ({...props}) =>(
    <TouchableWithoutFeedback
        style={{marginHorizontal:10}}
        {...props}  
    >
        <Text style={{fontSize:16,paddingRight:15}}>Done</Text>
    </TouchableWithoutFeedback>
);

const welcome = (props) =>  {
    return (
        <Onboarding 
            NextButtonComponent={Next}
            SkipButtonComponent={Skip}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => props.navigation.replace("Login")}
            onDone={() => props.navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor:'#f4f2f0',
                    image: <Image source={popcorn} />,
                    title:'Onboarding',
                    subtitle:'Done with react native onboarding'
                },
                {
                    backgroundColor:'#D0D7DF',
                    image: <Image source={video} style={{width:200,height:200}}/>,
                    title:'Onboarding',
                    subtitle:'Done with react native onboarding'
                },
                {
                    backgroundColor:'#adddfb',
                    image: <Image source={videoCamera} style={{width:200,height:200}}/>,
                    title:'Onboarding',
                    subtitle:'Done with react native onboarding'
                },
                {
                    backgroundColor:'#c3e4ec',
                    image: <Image source={camera} style={{width:220,height:220}}/>,
                    title:'Onboarding',
                    subtitle:'Done with react native onboarding'
                }
            ]}
        />
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    imageContainer:{
        resizeMode:'contain'
    }
})


export default welcome
