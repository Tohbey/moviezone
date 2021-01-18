import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { 
    fetchUpcoming, 
    fetchTopRated, 
    fetchNowPlaying, 
    fetchPopular,
    fetchTrending 
} from '../redux/actions/movie'
import MovieSlider from '../component/movie/movieSlider';

const home = (props) =>  {
    let popularMovies = []
    let playingMovie = []
    let topMovies = []
    let trendingMovies = []
    let upcomingMovies = []

    const popular = "Popular";
    const nowPlaying = "Now Playing"
    const topRated = "Top Rated"
    const trending = "Trending"
    const upComing = "Upcoming"

    const dispatch = useDispatch()

    const getPopular = () => dispatch(fetchPopular());
    const getNowPlaying = () => dispatch(fetchNowPlaying());
    const getTopMovies = () => dispatch(fetchTopRated());
    const getUpcoming = () => dispatch(fetchUpcoming());
    const getTrending = () => dispatch(fetchTrending());

    useSelector(state => {
        playingMovie = state.movie.nowPlaying;
        popularMovies = state.movie.popular
        topMovies = state.movie.topRated
        upcomingMovies = state.movie.upComing
        latestMovies = state.movie.latest
        trendingMovies = state.movie.trending
    })

    useEffect(() => {
      getPopular()
      getNowPlaying()
      getTopMovies()
      getUpcoming()
      getTrending()  
    },[])
    let movies = "Movies";
    return (
        <ScrollView >
            <View style={styles.container}>
                <MovieSlider movies={popularMovies} name={popular} navigation={props.navigation} screen={movies} category="Popular"/>
                <MovieSlider movies={playingMovie} name={nowPlaying} navigation={props.navigation} screen={movies} category="Now Playing"/>
                <MovieSlider movies={topMovies} name={topRated} navigation={props.navigation} screen={movies} category="Top Rated"/>
                <MovieSlider movies={trendingMovies} name={trending} navigation={props.navigation} screen={movies} />
                <MovieSlider movies={upcomingMovies} name={upComing} navigation={props.navigation} screen={movies} category="Upcoming"/>
            </View>
        </ScrollView>
    )
}


export default home

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'white'
    },
})
