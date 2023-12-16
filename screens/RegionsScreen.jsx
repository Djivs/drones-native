import { View, Text, Button, ScrollView, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../api';
import { StyleSheet } from 'react-native'
import { setRegions } from '../store/regionSlice';
import RegionCard from '../components/RegionCard';

export default function RegionsScreen({ navigation }) {
    const dispatch = useDispatch()
    const {regions} = useSelector((store) => store.region)

    const handleTextChange = async (newText) => {
        await axiosInstance.get('/regions?name_pattern=' + newText).then((response) => dispatch(setRegions(response?.data)))
    }

    useEffect(() => {
        async function getAllRegions() {
            await axiosInstance.get('/regions').then((response) => dispatch(setRegions(response?.data)))
        }
        getAllRegions()
    }, [dispatch])
    return (
        <ScrollView >
            <TextInput style={styles.input} onChangeText={newText => handleTextChange(newText)}></TextInput>
            <View style={styles.page}>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});