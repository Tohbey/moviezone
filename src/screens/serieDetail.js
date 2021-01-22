import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';

const serieDetail = (props) => {
    console.log(props.route.params)
    return (
        <View>
            <Text>Serie details</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default serieDetail
