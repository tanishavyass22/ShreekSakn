import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedId: "",
    selectedId1: "",
    selectedId2: "",
    selectedId3: "",
    Age: "",
    intrest: "",
    nationality: "",
    budget:"",
    locations: [],
};

const WantedSlice = createSlice({
  name: 'WantedInformation',
  initialState,
  reducers: {
    setWantedInformation: (state, action) => {
        return {...state, ...action.payload}; 
    },
    clearWantedInformation: () => initialState, 
  },
});

export const { setWantedInformation, clearWantedInformation } = WantedSlice.actions; 

export default WantedSlice.reducer;
