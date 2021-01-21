import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import MovieContainer from '../component/movie/movieContainer';
import { 
    fetchPopularShows, 
    fetchOnAirShows, 
    fetchTopRatedShows, 
    fetchAiringTodayShows,
    getTvShows
} from '../redux/actions/series'
import AntDesign from 'react-native-vector-icons/AntDesign';

const series = (props) =>  {
    let series = [];
    let onAir = [];
    let airingShows = [];
    let popularShows = []
    let topRatedShows = [];

    const dispatch = useDispatch()

    const [category, setcategory] = useState('Popular')

    const getPopularShows = () => dispatch(fetchPopularShows());
    const getOnAirShows = () => dispatch(fetchOnAirShows());
    const getTopRatedShows = () => dispatch(fetchTopRatedShows());
    const getAiringShows = () => dispatch(fetchAiringTodayShows());
    const getSeries = (category) => dispatch(getTvShows(category))

    useSelector(state => {
        onAir = state.serie.onAir;
        airingShows = state.serie.airingToday;
        popularShows = state.serie.popular;
        topRatedShows = state.serie.topRated;
        series = state.serie.series
    })

    useEffect(() => {
        getPopularShows();
        getOnAirShows();
        getTopRatedShows();
        getAiringShows();
        getSeries(category)
    },[])

    const onClick = (category) => {
        setcategory(category)
        getSeries(category)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainHeader}>Tv Shows</Text>
                <AntDesign name="search1" size={24} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableWithoutFeedback
                    onPress={() => onClick("Popular")}>
                    <View style={styles.button}>
                        <Text style={(category === "Popular")?styles.btnSelected:styles.notSelected}>
                            Popular
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => onClick("On Air")}>
                    <View style={styles.button}>
                        <Text style={(category === "On Air")?styles.btnSelected:styles.notSelected}>
                            On Air
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => onClick("Top Rated")}>
                    <View style={styles.button}>
                        <Text style={(category === "Top Rated")?styles.btnSelected:styles.notSelected}>
                            Top Rated
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => onClick("Airing Today")}>
                    <View style={styles.button}>
                        <Text style={(category === "Airing Today")?styles.btnSelected:styles.notSelected}>
                            Airing Today
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{marginTop:5}}>
                <MovieContainer movies={series} name={category} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'space-between'
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
export default series
