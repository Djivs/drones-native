import {View, Text, Button, Image} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'

export default function RegionCard({ navigation, ...props}) {
    const handlePress = () => {
        navigation.navigate('Регион', {name: props.Name})
    }

    const [imageLink, setImageLink] = useState("http://192.168.183.1:9000/regionimages/empty.webp")

    useEffect(() => {
        if (props.ImageName) {
            setImageLink("http://192.168.0.105:9000/regionimages/" + props.ImageName)
        }
    })

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source= {{ uri: imageLink}}
                resizeMode = 'contain'
            />
            <View style={styles.container}>
                <Text style={styles.brandTitle}>{props.Name}</Text>
            </View>
            <Button title='Подробнее' onPress={handlePress}></Button>
            <Text>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    brandTitle: { color: '#000000', fontSize: 16, textAlign: 'center'},
    text: { color: '#f0f0f0', fontSize: 16 },
});