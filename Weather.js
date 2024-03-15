import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        title: 'Сиди вдома',
        subtitle: 'Ти бачиш що на вулиці?'
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'Візьми парасольку',
        subtitle: 'Можливо дощ стане сильнішим '
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046','#1CB5E0'],
        title: 'На вулиці дощ',
        subtitle: 'Це означає, що скоро буде веселка!'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'На вулиці сніжок!',
        subtitle: 'Вдягайтесь тепліше'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
        title: 'Багато пилу',
        subtitle: 'Краще закрийте вікна'
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'На вулиці туман :(',
        subtitle: 'Не раджу виходити без потреби'
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'На вулиці сніжок!',
        subtitle: 'Вдягайтесь тепліше'
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'Нічого не видно в тумані',
        subtitle: 'Проте як в Сайлент-Хілл :)'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Погода супер :)',
        subtitle: 'Йдіть гуляти, досить сидіти вдома!'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Хмарки',
        subtitle: 'Білорриві конячки'
    },
}
export default function Weather({temp, condition}){
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/> 
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}} >
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10, 
        textAlign: 'left'
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
        textAlign: 'left'
    },
    textContainer: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start' 
    }
})