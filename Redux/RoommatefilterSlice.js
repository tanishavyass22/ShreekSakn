import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    RoommateselectedDate: '',
    minbudget: '',
    maxbudget: '',
    RoommateminAge: '',
    RoommatemaxAge: '',
    RoommateGender: '',
    RoommateOccupation: '',
    RoommateSmoking: '',
    RoommateLanguage:'',
    RoommateNationality: '',
};

const RoommatefilterSlice = createSlice({
  name: 'Roommatefilters',
  initialState,
  reducers: {
    setRoommateFilters: (state, action) => {
      return {...state, ...action.payload}; 
    },
    clearRoommateFilters: () => initialState, 
  },
});

export const {setRoommateFilters, clearRoommateFilters} = RoommatefilterSlice.actions;

export default RoommatefilterSlice.reducer;
