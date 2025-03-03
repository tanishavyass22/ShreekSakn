import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedRoom: '',
  selectedFurnished: '',
  checkedAmenities: '',
  selectedNumber: '',
  selectedDuration: '',
  checkedItems: '',
  minPrice: '',
  maxPrice: '',
  gender: '',
  minage: '',
  maxage: '',
  occupation: '',
  smoking:'',
  sharinggender: '',
  sharingminage: '',
  sharingmaxage: '',
  sharinglanguage: '',
  sharingsmoking:'',
  sharingNationality: '',
  rommates: '',
  selectedDate: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return {...state, ...action.payload}; 
    },
    clearFilters: () => initialState, 
  },
});

export const {setFilters, clearFilters} = filterSlice.actions;

export default filterSlice.reducer;
