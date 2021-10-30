import React from 'react'
import {Image, Text, View, StyleSheet} from 'react-native'
import FoodImage from '../assets/food.png'
import CameraImage from '../assets/action-camera.png'


export default function CategorylistItem(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CategoryFood</Text>
            <Image style={styles.categoryImage} source={FoodImage}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: 'black',
        backgroundColor: '#FF4',
        marginBottom: 10,

    },
    categoryImage: {
        width: 64,
        height: 64
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '900'

    }
});