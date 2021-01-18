import React from 'react'
import { 
    ScrollView, View, Text, StyleSheet, TouchableOpacity
} from 'react-native'
import Card from '../UI/card'

const movieSlider = ({movies, name, navigation, screen}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <Text style={styles.header}>{name}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate(screen)}>
                    <View>
                        <Text>Sell all</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <ScrollView horizontal={true}>
                    {movies.slice(0,10).map((movie,i) => (
                        <Card key={i}
                            title={movie.original_title}
                            date={movie.release_date}
                            rating={movie.vote_average}
                            poster={movie.poster_path}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 250,
        padding:2,
        marginBottom:5
    }, 
    header:{
        fontSize:20,
        color:'black',
        fontWeight:'700'
    },
})


export default movieSlider
