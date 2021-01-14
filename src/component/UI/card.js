import React, {useEffect} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { IMAGE_BASE_URL } from '../../utils/constant'

const card = ({poster,title,date, rating}) =>  {
    return (
        <View style={styles.card}>
            <Image source={poster} style={styles.image}/>
            <Text>{title}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>{date}</Text>
                <Text>{rating}</Text>
            </View>
        </View>
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
        height:150,
    }
})