import React from 'react'
import { 
    ScrollView, View, Text, StyleSheet, TouchableOpacity
} from 'react-native'
import Board from '../UI/board'

const movieContainer = ({movies,name})  => {
    return (
        <View>
            <Text style={{marginLeft:10, fontSize:20,color:'black'}}>
                {name}
            </Text>
            <ScrollView>
                {movies?.map((movie,i) => (
                    <Board 
                        key={i} 
                        title={movie?.title}
                        date={movie?.release_date}
                        overview={movie?.overview}
                        rating={movie?.vote_average}
                        popularity={movie?.popularity}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default movieContainer
