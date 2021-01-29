import React, { useEffect, useState } from 'react'
import { 
    View,
    StyleSheet,
    ScrollView,
    Text,
    Image
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { windowHeight, windowWidth } from '../utils/dimensions';
import{
    BASE_URL_MOVIE, API_KEY,IMAGE_BASE_URL
} from '../utils/constant'
import Client from '../services/HTTPClient';
import Board from '../component/UI/board';


const movieDetail = (props) => {
    const [movie, setmovie] = useState({})
    const [casts, setcasts] = useState([])
    const [similarMovies, setsimilarMovies] = useState([])

    const movieId = props.route.params.id;

    const getMovieDetail = async(id) => {
        try {
            let client = new Client(BASE_URL_MOVIE);

            const res = await client.get("/"+id+API_KEY)
            setmovie(res)
        } catch (error) {
            console.log(error)
        }
    }

    const getCast = async(id) => {
        try {
            let client = new Client(BASE_URL_MOVIE+"/"+id)

            const res = await client.get("/credits"+API_KEY)
            setcasts(res.cast)
        } catch (error) {
            console.log(error)
        }
    }

    const getSimilar = async(id) => {
        try {
            let client = new Client(BASE_URL_MOVIE+"/"+id)

            const res = await client.get("/similar"+API_KEY)
            setsimilarMovies(res.results)
        } catch (error) {
            console.log(error)
        }
    }
    const timeConvert = (n) => {
        let hours = (n/60);
        var rhours = Math.floor(hours);
        var mintues = (hours - rhours) * 60;
        var rminutes = Math.round(mintues);
        return <Text>{rhours}h {rminutes}m</Text>
    }

    
    useEffect(() => {
       getMovieDetail(movieId)
       getCast(movieId)
       getSimilar(movieId)
    }, [])

    let revenue = Number(movie?.revenue).toLocaleString()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconHolder}>
                    <MaterialIcons name="keyboard-backspace" size={25} color="white" onPress={() => props.navigation.goBack()}/>
                    <Entypo name="dots-three-horizontal" size={25} color="white"/>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.imageHolder}></View>
                <View style={styles.headerHolder}>
                    <Text style={styles.title}>{movie?.original_title}</Text>
                    <Text style={{fontSize:14, color:'black'}}>{movie?.release_date}</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={{flexDirection:'row'}}>
                        {movie?.genres?.map((genre,i) => (
                            <View key={i} style={styles.genre}>
                                <Text style={{color:'black'}}>{genre.name} </Text>
                            </View>
                        ))}
                    </View>
                    <Text style={{fontSize:20,color:'black',fontWeight:'bold', marginTop:5}}>
                        Overview
                    </Text>
                    <Text style={{fontSize:15, color:'black',marginTop:2, marginBottom:5}}>{movie?.overview}</Text>
                    <View style={styles.rows}>
                        <View>
                            <Text style={{fontSize:15,color:'black'}}>Status</Text>
                            <Text>{movie?.status}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:15,color:'black'}}>Original Language</Text>
                            {movie?.spoken_languages?.map((language,i) => (
                                <Text key={i}>{language.name}</Text>
                            ))}
                        </View>
                        <View>
                            <Text style={{fontSize:15,color:'black'}}>Running Time</Text>
                            {timeConvert(movie?.runtime)}
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontSize:18,color:'black',fontWeight:'700'}}>Full Cast & Crew</Text>
                        <Text style={{textAlign:'right'}}>Show All</Text>
                    </View>
                    <View style={styles.rows}>
                        <View style={{flexDirection:'row'}}>
                            {casts?.slice(0,4).map((cast,i) => (
                                    <View style={{marginRight:13}} key={i}>
                                        <View style={styles.castImage}></View>
                                        <Text style={{textAlign:'center',fontSize:16,color:'black',marginTop:3}}>{cast?.name}</Text>
                                    </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.rows}>
                        <View>
                            <Text style={{fontSize:15,color:'black'}}>Revenue</Text>
                            <Text>${revenue}</Text>
                        </View>
                        <View >
                            <Text style={{fontSize:15,color:'black'}}>Budget</Text>
                            <Text>${movie?.budget}</Text>
                        </View>
                    </View>
                    <View style={styles.rows}>
                        <Text>Similar Movies</Text>
                        <View>
                            {similarMovies?.slice(0,5).map((similar, i) => (
                                <Board key={i} 
                                    poster = {similar.poster_path}
                                    title = {similar.original_title}
                                    rating = {similar.vote_average}
                                    overview = {similar.overview}
                                    popularity= {similar.popularity}
                                    navigation= {props.navigation}
                                    screen= "movieDetail"
                                    id= {similar.id}
                                />
                            ))}
                        </View>
                    </View>
                </View>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'green'
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
        width:'95%'
    },
    imageHolder:{
        position:'absolute',
        top: -75,
        left: 20,
        width:130,
        height:150,
        borderWidth:3,
        borderRadius:10
    },
    headerHolder:{
        position:'absolute',
        top: 0,
        left: 155,
        width:230,
        height:74,
        padding:5
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        marginTop:5
    },
    genre:{
        marginRight:5,
        borderWidth:2,
        padding:2,
        borderRadius:5
    },
    rows:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginTop:5,
        marginBottom:5
    },
    castImage:{
        width:80,
        height:100,
        borderWidth:2,
        borderRadius: 10
    }
})

export default movieDetail
