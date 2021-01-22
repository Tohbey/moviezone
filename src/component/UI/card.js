import React, {useEffect} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';


const card = ({poster,title,date, rating}) =>  {
    const uri = "https://image.tmdb.org/t/p/w138"+poster;
    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View style={styles.imageHolder}></View>
                {/* <Image source={{uri}} /> */}
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