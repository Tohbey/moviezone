import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { windowHeight, windowWidth } from '../utils/dimensions';
import { fetchMovie } from '../redux/actions/detail'

const movieDetail = (props) => {
    let movie = {};

    const movieId = props.route.params.id;
    console.log(movieId)

    const dispatch = useDispatch();

    const getMovieDetail = (id) => dispatch(fetchMovie(id));

    useSelector(state => {
        movie = state.detail.movieDetail
        console.log('movie detail',movie)
    })
    useEffect(() => {
       getMovieDetail(movieId)
    }, [])

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
                <View style={styles.bodyContainer}>
                    <Text>Movie</Text>
                </View>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
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
        borderWidth:2,
        width:'95%'
    },
    imageHolder:{
        position:'absolute',
        top: -75,
        left: 20,
        width:130,
        height:150,
        borderWidth:3
    }
})

export default movieDetail
