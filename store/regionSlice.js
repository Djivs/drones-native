import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    regions: [],
    region: {},
};

export const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        setRegions: (state, { payload }) => {
            console.log('setRegions');
            state.regions = payload;
        },
        setRegion: (state, { payload }) => {
            console.log('setRegion');
            state.region = payload;
        },
        resetRegion: (state) => {
            console.log('resetRegion');
            state.region = {};
        },
    },
});

export const regionReducer = regionSlice.reducer;

export const { setRegions, setRegion, resetRegion } = regionSlice.actions;