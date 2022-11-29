import React from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import logo from '../assets/logo.jpg'


function HomeScreen({ navigation }) {

    const startQuiz = () => {
        navigation.navigate('GameScreen')
     }
    
    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={logo} />

            <TouchableOpacity style={styles.button} onPress={()=>startQuiz(navigation)}>
                <Text style={{color:'#fff'}}>Έναρξη Quiz</Text>
            </TouchableOpacity>

            <View style={styles.copy}>
                <Text>Ανάπτυξη εφαρμογής</Text>
                <Text style={{marginTop:10,fontWeight:'800'}}>Αλέξανδρος Αναστασιάδης</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    logo: {
        width: '90%',
        resizeMode: 'contain'
    },
    button: {
        padding: 20,
        width: 200,
        borderRadius: 5,
        backgroundColor: '#000000',
        justifyContent:'center',
        alignItems:'center'
    },
    copy:{
        justifyContent:'center',
        alignItems:'center'
    }
})




export default HomeScreen
