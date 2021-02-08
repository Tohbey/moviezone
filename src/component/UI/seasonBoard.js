import React, {useEffect} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import { MAIN_IMAGE_URL} from '../../utils/constant'


const seasonBoard = ({poster,name, overview, episodeNumber, season, airDate}) => {
    return (
        <View style={styles.board}>
            <View style={styles.left}>
                <Image source={{uri:MAIN_IMAGE_URL+poster}} style={styles.imageHolder}/>
            </View>
            <View style={styles.right}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.title} numberOfLines={1}>{name}</Text> 
                    <Text style={styles.rating}>{season}</Text>
                </View>
                <Text numberOfLines={3} style={{marginBottom:5}}>{overview}</Text>
                <Text>Number of Episodes: {episodeNumber}</Text>
                <Text>{airDate}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    board:{
        height:135,
        width: windowWidth - 29 ,
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        marginTop:5,
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },
    left:{
        width:120,
        marginRight:5,
    },
    imageHolder:{
        width: 110,
        height: 135,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10
    },
    right:{
        padding:3,
        width: windowWidth - 170
    },
    title:{
        fontSize:16,
        width:200,
        fontWeight:'bold',
        color:'black'
    },
    rating:{
        fontSize:16, 
        color:'#935DFF',
        fontWeight:'bold'
    }
})

export default seasonBoard