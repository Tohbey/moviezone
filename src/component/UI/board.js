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
                <Text>Image</Text>
            </View>
            <View style={styles.right}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>Title</Text> 
                    <Text>Date</Text>
                </View>
                <Text>overview</Text>
                <Text>genre</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>Rating</Text>
                    <Text>Popularity</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    board:{
        width:'100%',
        height:135,
        borderColor:'red',
        borderWidth: 1,
        marginTop:5,
        flexDirection:'row'
    },
    left:{
        width:140,
        borderWidth:1,
        marginRight:5
    },
    right:{
        padding:3,
        width: windowWidth - 150
    }
})

export default board
