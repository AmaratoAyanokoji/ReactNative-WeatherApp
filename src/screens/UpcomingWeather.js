import React from 'react'
import { SafeAreaView, StyleSheet, Text, StatusBar, FlatList, View, ImageBackground } from 'react-native'
import ListItem from '../components/ListItem'
const DATA = [
    {
        dt_text: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },

    {
        dt_text: "2023-02-18 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },

    {
        dt_text: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }

]

const UpcomingWeather = () => {

    const renderItem = ({ item }) => (
        <ListItem condition={item.weather[0].main} dt_text={item.dt_text} min={item.main.temp_min} max={item.main.temp_max} />
    )

    const { container, image } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../resources/clouds.jpg')} style={image}>
                <Text>UpcomingWeather</Text>

                <FlatList
                    data={DATA} renderItem={renderItem} keyExtractor={(item) => item.dt_text} />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'royalblue'

    },

    image: {
        display: 'flex',
        height: '100%'
    }

})
export default UpcomingWeather