import React, { useState }from 'react';
import { useSelector } from 'react-redux'
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import MovieContainer from '../component/movie/movieContainer';

const movies = (props) =>  {
    const [category, setcategory] = useState('Popular')
    const [films, setfilms] = useState(popularMovies)

    let popularMovies = []
    let playingMovie = []
    let topMovies = []
    let upcomingMovies = []
    
    useSelector(state => {
        playingMovie = state.movie.nowPlaying;
        popularMovies = state.movie.popular
        topMovies = state.movie.topRated
        upcomingMovies = state.movie.upComing
    })
    
    const click = (category, film) => {
        setcategory(category);
        setfilms(film);
        console.log(category)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainHeader}>Movies</Text>
                <TouchableWithoutFeedback
                    onPress={() => click("Popular",popularMovies)}>
                    <View style={styles.category}>
                        <Text style={(category === "Popular")?styles.btnSelected:styles.notSelected}>
                            Popular
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => click("Now Playing",playingMovie)}>
                    <View style={styles.category}>
                        <Text style={(category === "Now Playing")?styles.btnSelected:styles.notSelected}>
                            Now Playing
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => click("Upcoming",upcomingMovies)}>
                    <View style={styles.category}>
                        <Text style={(category === "Upcoming")?styles.btnSelected:styles.notSelected}>
                            Upcoming
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => click("Top Rated",topMovies)}>
                    <View style={styles.category}>
                        <Text style={(category === "Top Rated")?styles.btnSelected:styles.notSelected}>
                            Top Rated
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{marginTop:5}}>
                <MovieContainer movies={films} name={category} />
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
    category:{
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
