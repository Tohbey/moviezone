import React, { useState, useEffect } from 'react'
import { 
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { windowHeight, windowWidth } from '../utils/dimensions';
import{
    BASE_URL_TVSHOW, API_KEY, IMAGE_BASE_URL, IMAGE_BASE_URL_FACE
} from '../utils/constant'
import Client from '../services/HTTPClient';
import { LinearGradient } from 'expo-linear-gradient'
import EpisodeBoard from '../component/UI/episodeBoard';
import SeasonBoard from '../component/UI/seasonBoard';

const serieDetail = (props) => {
    const [casts, setcasts] = useState([])
    const [serie, setserie] = useState({})
    const [current, setcurrent] = useState({})
    const [seasons, setseasons] = useState([])

    const serieId = props.route.params.id;
    console.log(serieId)


    const getSerieDetail = async(id) => {
        try {
            let client = new Client(BASE_URL_TVSHOW)

            const res = await client.get("/"+id+API_KEY)
            setserie(res)
            setcurrent(serie?.seasons[serie?.number_of_seasons-1])
            setseasons(serie?.seasons)
        } catch (error) {
            console.log(error)
        }
    }

    const getCast = async(id) => {
        try {
            let client = new Client(BASE_URL_TVSHOW+"/"+id)

            const res = await client.get("/credits"+API_KEY)
            setcasts(res.cast)
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
        getSerieDetail(serieId)
        getCast(serieId)
        console.log(serie?.number_of_seasons-1)
    }, [])

    return(
        <ScrollView>               
            <View style={styles.container}>
                <ImageBackground source={{uri:IMAGE_BASE_URL+serie.backdrop_path}} style={{width:'100%'}} imageStyle={{height:400, width:500}}>
                    <LinearGradient colors={["#09203f", "#537895"]} style={{width: '100%',
                        height: '100%',
                        opacity: 0.92}} start={[0.1, 0.1]}>
                        <View style={styles.header}>
                            <View style={styles.iconHolder}>
                                <MaterialIcons name="keyboard-backspace" size={25} color="white" onPress={() => props.navigation.goBack()}/>
                                <Entypo name="dots-three-horizontal" size={25} color="white"/>
                            </View>
                        </View>
                        <View style={styles.body}>
                            <Image source={{uri: IMAGE_BASE_URL+serie.poster_path}} style={styles.imageHolder}/>
                            <View style={styles.headerHolder}>
                                <Text style={styles.title}>{serie?.original_name}</Text>
                                <Text style={{fontSize:14, color:'black'}}>{serie?.first_air_date}</Text>
                            </View>
                            <View style={styles.bodyContainer}>
                                <View style={{flexDirection:'row'}}>
                                    {serie?.genres?.map((genre,i) => (
                                        <View key={i} style={styles.genre}>
                                            <Text style={{color:'black'}}>{genre.name} </Text>
                                        </View>
                                    ))}
                                </View>
                                <Text style={{fontSize:20,color:'black',fontWeight:'bold', marginTop:5}}>
                                    Overview
                                </Text>
                                <Text style={{fontSize:15, color:'black',marginTop:2, marginBottom:5, textAlign:'justify'}}>{serie?.overview}</Text>
                                <View style={styles.rows}>
                                    <View>
                                        <Text style={{fontSize:15,color:'black'}}>Status</Text>
                                        <Text>{serie?.status}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:15,color:'black'}}>Original Language</Text>
                                        {serie?.spoken_languages?.map((language,i) => (
                                            <Text key={i}>{language.name}</Text>
                                        ))}
                                    </View>
                                    <View>
                                        <Text style={{fontSize:15,color:'black'}}>Running Time</Text>
                                        {timeConvert(serie?.episode_run_time)}
                                    </View>
                                </View>
                                <View>
                                    <Text style={{fontSize:15,color:'black'}}>Last Episode</Text>
                                    <EpisodeBoard 
                                        name={serie?.last_episode_to_air?.name}
                                        overview={serie?.last_episode_to_air?.overview}
                                        rating={serie?.last_episode_to_air?.vote_average}
                                        episodeNumber={serie?.last_episode_to_air?.episode_number}
                                        seasonNumber={serie?.last_episode_to_air?.season_number}
                                        poster={serie?.last_episode_to_air?.still_path}
                                        popularity={serie?.last_episode_to_air?.vote_count}
                                    />
                                    <View style={styles.rows}>
                                        <View>
                                            <Text style={{fontSize:15,color:'black'}}>Number of Seasons</Text>
                                            <Text>{serie?.number_of_seasons}</Text>
                                        </View>
                                        <View>
                                            <Text style={{fontSize:15,color:'black'}}>Number of Episodes</Text>
                                            <Text>{serie?.number_of_episodes}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{fontSize:15,color:'black'}}>Current Season</Text>
                                    <Text style={{textAlign:'right'}}>Show All</Text>
                                    <SeasonBoard 
                                        name={current?.name}
                                        episodeNumber={current?.episode_count}
                                        overview={current?.overview}
                                        poster={current?.poster_path}
                                        season={current?.season_number}
                                        airDate={current?.air_date}
                                    />
                                </View> 
                                <View style={styles.rows}>
                                    <View style={{flexDirection:'row'}}>
                                        {casts?.slice(0,4).map((cast,i) => (
                                                <View style={{marginRight:13}} key={i}>
                                                    <Image source={{uri: IMAGE_BASE_URL_FACE+cast.profile_path}} style={styles.castImage}/>
                                                    <Text style={{textAlign:'center',fontSize:16,color:'black',marginTop:3,width:65}}>{cast?.name}</Text>
                                                </View>
                                        ))}
                                    </View>
                                </View>                       
                            </View>                
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        height:220,
        padding: 10,
    },
    body:{
        height:1480,
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
    },
    imageHolder:{
        position:'absolute',
        top: -75,
        left: 20,
        width:130,
        height:150,
        borderRadius: 10
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
        borderWidth:1,
        padding:5,
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
    },
})

export default serieDetail