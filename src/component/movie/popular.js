import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    ScrollView, View, Text, StyleSheet
} from 'react-native'
import Card from '../UI/card'
import {
    fetchPopular
} from '../../redux/actions/movie';
import { TouchableOpacity } from 'react-native-gesture-handler';

const popular = () => {
    let popularMovie = [];
    const dispatch = useDispatch()

    const getPopular = () => dispatch(fetchPopular())
    
    useSelector(state => {
       popularMovie = state.movie.popular
    })
    

    

    useEffect(() => {
        getPopular()
        console.log(popularMovie)
    },[])

    

    return (
        <View style={styles.upcoming}>
                <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={styles.header}>Upcoming</Text>
                    <TouchableOpacity>
                        <View>
                            <Text>Sell all</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView horizontal={true}>
                        {popularMovie.slice(0,10).map((movie) => (
                            <Card 
                                title={movie.original_title}
                                date={movie.release_date}
                                rating={movie.vote_average}
                            />
                        ))}
                    </ScrollView>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        fontSize:20,
        color:'black',
        fontWeight:'700'
    },
    upcoming:{
        height: 250,
        padding:2,
        marginBottom:5
    }, 
})

export default popular
