import React, {useEffect} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';


const card = ({poster,title,date, rating}) =>  {
    const uri = "https://image.tmdb.org/t/p/w138"+poster;
    return (
        <View style={styles.card}>
            <Image source={{uri}} />
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