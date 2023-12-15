import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setRegion, resetRegion } from '../store/regionSlice';
import React from 'react';
import { axiosInstance } from '../api';

export default function RegionScreen({ route }) {
    const {name} = route.params
    const dispatch = useDispatch();
    const {region} = useSelector((store) => store.region)
    useEffect(() => {
        async function getOneRegion() {
            await axiosInstance.get(`/region/${name?.toString()}`).then((response) => dispatch(setRegion(response?.data)));
        }
        getOneRegion()
        console
        return () => {
            dispatch(resetRegion())
        }
    }, [dispatch])
    return (
        <View>
            <Text>{region.Name}</Text>
        </View>
    );
}