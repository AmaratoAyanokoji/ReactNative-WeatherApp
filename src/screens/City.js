import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, ImageBackground } from 'react-native'


const City = () => {
    const { container } = styles
    return (

        < SafeAreaView style={container}>
            <ImageBackground source={require('../../resources/city.jpg')} style={styles.image}>
                <Text style={styles.h1}>City</Text>
            </ImageBackground>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    image: {
        display: 'flex',
        height: '100%'
    },
    h1: {
        color: 'white'
    }

})


export default City