import React, {useEffect} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import {
    MAIN_IMAGE_URL
} from '../../utils/constant'

const card = ({poster,title,date, rating}) =>  {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <Image source={{uri: MAIN_IMAGE_URL+poster}} style={styles.imageHolder}/>
                <Text style={{fontSize:13, color:'black',fontWeight:'600'}}>{title}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>{date}</Text>
                    <Text>{rating}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default card
const styles = StyleSheet.create({
    card:{
        width:140,
        padding:5,
        height:210,
        marginLeft:10,
    },
    image:{
    },
    imageHolder:{
        height:150,
        width:120,
        borderWidth: 2,
        borderRadius:10
    }
})