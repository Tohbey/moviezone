import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const WhiteButton = ({buttonTitle, ...rest}) => {
    return(
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
    },
})

export default WhiteButton;