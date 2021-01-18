import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/dimensions';

const board = ({poster,title,date, rating, overview, genre, popularity}) => {
    return (
        <View style={styles.board}>
            <View style={styles.left}>
                <Image />
            </View>
            <View style={styles.right}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>{title}</Text> 
                    <Text>{date}</Text>
                </View>
                <Text numberOfLines={3}>{overview}</Text>
                <Text>{genre}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>{rating}</Text>
                    <Text>{popularity}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    board:{
        width:'100%',
        height:135,
        marginTop:5,
        marginBottom:5,
        flexDirection:'row',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'black'
    },
    left:{
        width:140,
        marginRight:5
    },
    right:{
        padding:3,
        width: windowWidth - 150
    }
})

export default board
