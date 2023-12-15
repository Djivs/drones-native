import { View, Text, Button, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../api';
import { StyleSheet } from 'react-native'
import { setRegions } from '../store/regionSlice';
import RegionCard from '../components/RegionCard';

export default function RegionsScreen({ navigation }) {
    const dispatch = useDispatch()
    const {regions} = useSelector((store) => store.region)

    useEffect(() => {
        async function getAllRegions() {
            await axiosInstance.get('/regions').then((response) => dispatch(setRegions(response?.data)))
        }
        getAllRegions()
        console.log(regions)
    }, [dispatch])
    return (
        <ScrollView>
            <View>
                {!!regions && 
                    regions.map((region) => <RegionCard key={region.ID} {...region} navigation={navigation}></RegionCard>)
                    }
            </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a2a2a',
    },
});