import {View, Text, Button, Image} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import RegionScreen from '../screens/RegionScreen'

export default function RegionCard({ navigation, ...props}) {
    const handlePress = () => {
        navigation.navigate('Region', {name: props.Name})
    }

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source= {{ uri: `http://192.168.0.104:9000/regionimages/${props.ImageName}`}}
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
        backgroundColor: '#303030',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    brandTitle: { color: '#4287f5', fontSize: 16 },
    text: { color: '#f0f0f0', fontSize: 16 },
});