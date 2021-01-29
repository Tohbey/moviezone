import React, { useState, useEffect } from 'react'
import { 
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { windowHeight, windowWidth } from '../utils/dimensions';
import{
    BASE_URL_TVSHOW, API_KEY
} from '../utils/constant'
import Client from '../services/HTTPClient';

const serieDetail = (props) => {
    const [serie, setserie] = useState({})
    const [isLoading, setisLoading] = useState(true)

    const serieId = props.route.params.id;
    console.log(serieId)


    const getSerieDetail = async(id) => {
        try {
            let client = new Client(BASE_URL_TVSHOW)

            const res = await client.get("/"+id+API_KEY)
            setserie(res)
            setisLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getSerieDetail(serieId)
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconHolder}>
                    <TouchableWithoutFeedback
                     onPress={() => props.navigation.goBack()}>
                        <MaterialIcons name="keyboard-backspace" size={25} color="white"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Entypo name="dots-three-horizontal" size={25} color="white"/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.imageHolder}></View>
                <View style={styles.bodyContainer}>
                    <Text>Tv Shows</Text>
                </View>                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
    },
    header:{
        height:220,
        padding: 10,
        backgroundColor:'#F2F2F2',
        backgroundColor:'green',
    },
    body:{
        height: windowHeight - 220,
        backgroundColor:'#F8F8F8',
        padding: 20,
        borderTopLeftRadius:50,
        position:'relative',
        borderTopRightRadius:50,
    },
    iconHolder:{
        position:'absolute',
        top:3,
        width: windowWidth,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    bodyContainer:{
        position:'absolute',
        top:95,
        left:20,
        right:20,
        borderWidth:2,
        width:'95%'
    },
    imageHolder:{
        position:'absolute',
        top: -75,
        left: 20,
        width:130,
        height:150,
        borderWidth:3
    },
})

export default serieDetail
