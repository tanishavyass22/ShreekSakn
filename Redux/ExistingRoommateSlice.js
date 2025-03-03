import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedId: "",
  selectedId1: "",
  selectedId2: "",
  checkedItems: "", 
  male: "", 
  female: "", 
  minAge: "", 
  maxAge: "", 
  nationality: "",
  bedrooms: "",
  bathrooms: "",
  checkedAmenities: [],
  selectedBill: "",
};

const existingRoommateSlice = createSlice({
  name: 'existing',
  initialState,
  reducers: {
    setExistingRoommate: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearExistingRoommate: () => initialState, 
  },
});

export const { setExistingRoommate, clearExistingRoommate } = existingRoommateSlice.actions;
export default existingRoommateSlice.reducer;
