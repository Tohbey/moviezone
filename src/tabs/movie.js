import React, { useState }from 'react';
import { useSelector } from 'react-redux'
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import Board from '../component/UI/board';

const movies = (props) =>  {
    const [button, setbutton] = useState('Popular')
    let popularMovies = []
    let playingMovie = []
    let topMovies = []
    let trendingMovies = []
    let upcomingMovies = []
    
    useSelector(state => {
        playingMovie = state.movie.nowPlaying;
        popularMovies = state.movie.popular
        topMovies = state.movie.topRated
        upcomingMovies = state.movie.upComing
        latestMovies = state.movie.latest
        trendingMovies = state.movie.trending
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainHeader}>Movies</Text>
                <TouchableWithoutFeedback
                    onPress={() => setbutton("Popular")}>
                    <View style={styles.button}>
                        <Text style={(button === "Popular")?styles.btnSelected:styles.notSelected}>
                            Popular
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => setbutton("Now Playing")}>
                    <View style={styles.button}>
                        <Text style={(button === "Now Playing")?styles.btnSelected:styles.notSelected}>
                            Now Playing
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => setbutton("Upcoming")}>
                    <View style={styles.button}>
                        <Text style={(button === "Upcoming")?styles.btnSelected:styles.notSelected}>
                            Upcoming
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => setbutton("Top Rated")}>
                    <View style={styles.button}>
                        <Text style={(button === "Top Rated")?styles.btnSelected:styles.notSelected}>
                            Top Rated
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{marginTop:5}}>
                <Text style={{marginLeft:10, fontSize:20,color:'black'}}>
                    {button}
                </Text>
                <Board />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    },
    header:{
        flexDirection:'row',
        padding:10,
        alignItems:'center'
    },

    mainHeader:{
        fontSize:25,
        color:'black',
        fontWeight:'600',
        marginRight:5
    },
    button:{
        padding:4,
    },
    btnSelected:{
        fontWeight:'bold',
        color:'black'
    },
    notSelected:{
        fontWeight:'100',
        color:'grey'
    }
})

export default movies
