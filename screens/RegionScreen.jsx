import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { setRegion, resetRegion } from '../store/regionSlice';
import { axiosInstance } from '../api';
import { StyleSheet } from 'react-native';

export default function RegionScreen({ route }) {
    const {name} = route.params

    const dispatch = useDispatch();
    
    const {region} = useSelector((store) => store.region)

    const [imageLink, setImageLink] = useState("http://192.168.0.105:9000/regionimages/empty.webp") 

    useEffect(() => {
        async function getOneRegion() {
            await axiosInstance.get(`/region/${name?.toString()}`).then((response) => dispatch(setRegion(response?.data)));
        }

        getOneRegion()

        

        return () => {
            dispatch(resetRegion())
        }
    }, [dispatch])
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source= {{ uri: (region.ImageName ? `http://192.168.0.105:9000/regionimages/${region.ImageName}` : "http://192.168.0.105:9000/regionimages/empty.webp")}}
                resizeMode = 'contain'
            />
            <Text style = {styles.titleText}>{region.Name}</Text>
            <Text>Статус: {region.Status}</Text>
            <Text> Площадь: {region?.AreaKm} км^2</Text>
            <Text> Население: {region?.Population} чел.</Text>
            <Text> Глава управы: {region?.HeadName}</Text>
            <Text> Email главы управы: {region?.HeadEmail}</Text>
            <Text> Телефон главы управы: {region?.HeadPhone}</Text>
            <Text> Средняя высота: {region?.AverageHeightM}</Text>
            <Text>Описание района: {region?.Details}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: { height: 320, alignSelf: 'stretch' },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center'
    }
});