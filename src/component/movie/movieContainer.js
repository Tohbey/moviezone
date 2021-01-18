import React from 'react'
import { 
    ScrollView, View, Text, StyleSheet, TouchableOpacity
} from 'react-native'
import Board from '../UI/board'

const movieContainer = ({movies})  => {
    return (
        <ScrollView>
            {movies.map((movie,i) => (
                <Board key={i} />
            ))}
        </ScrollView>
    )
}

export default movieContainer
