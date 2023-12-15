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
            state.regions = payload;
        },
        setRegion: (state, { payload }) => {
            state.region = payload;
        },
        resetRegion: (state) => {
            state.region = {};
        },
    },
});

export const regionReducer = regionSlice.reducer;

export const { setRegions, setRegion, resetRegion } = regionSlice.actions;