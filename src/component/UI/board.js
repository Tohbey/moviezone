import React, {useEffect} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import { IMAGE_BASE_URL, BASE_URL_TVSHOW, BASE_URL_MOVIE, API_KEY } from '../../utils/constant'
import Client from '../../services/HTTPClient'


const board = ({poster,title, rating, overview, popularity,navigation,screen,id}) => {
    // let genres = [];

    // const getGenre = async(movieId) => {
    //     try {
    //         let uri = (screen === "serieDetail") ? BASE_URL_TVSHOW : BASE_URL_MOVIE;
    //         const client = new Client(uri)
            
    //         const res = await client.get("/"+movieId+API_KEY)
    //         genres = res.genres   
    //         console.log(genres)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getGenre(id)
    // }, [])
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate(screen,{id})}>
            <View style={styles.board}>
                <View style={styles.left}>
                    <View style={styles.imageHolder}>
                        <Image source={{uri:IMAGE_BASE_URL+poster}}/>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.title} numberOfLines={1}>{title}</Text> 
                        <Text style={styles.rating}>{rating}</Text>
                    </View>
                    <Text numberOfLines={3} style={{marginBottom:5}}>{overview}</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Popularity: {popularity}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>    
    )
}

const styles = StyleSheet.create({
    board:{
        height:135,
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        marginTop:30,
        marginLeft:10,
        marginRight: 10,
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
        width:140,
        marginRight:5,
        position:'relative'
    },
    imageHolder:{
        position: 'absolute',
        width: 120,
        height: 135,
        borderWidth: 2,
        bottom: 20,
        left:15
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

export default board