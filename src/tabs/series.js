import React, { useState } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
const series = () =>  {
    const [button, setbutton] = useState('Popular')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainHeader}>Tv Shows</Text>
                <TouchableWithoutFeedback
                    onPress={() => setbutton("Popular")}>
                    <View style={styles.button}>
                        <Text style={(button === "Popular")?styles.btnSelected:styles.notSelected}>
                            Popular
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => setbutton("Now Playing")}>
                    <View style={styles.button}>
                        <Text style={(button === "Now Playing")?styles.btnSelected:styles.notSelected}>
                            Now Playing
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => setbutton("Upcoming")}>
                    <View style={styles.button}>
                        <Text style={(button === "Upcoming")?styles.btnSelected:styles.notSelected}>
                            Upcoming
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => setbutton("Top Rated")}>
                    <View style={styles.button}>
                        <Text style={(button === "Top Rated")?styles.btnSelected:styles.notSelected}>
                            Top Rated
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{marginTop:5}}>
                <Text style={{marginLeft:10, fontSize:20,color:'black'}}>
                    {button}
                </Text>
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
