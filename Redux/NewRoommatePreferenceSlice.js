import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedId: "",
  selectedId1: "",
  selectedId2: "",
  selectedId3: "",
  minAge: "",
  maxAge: "",
};

const preferenceSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setPreferences: (state, action) => {
      return { ...state, ...action.payload }
    },
    clearPreferences: () => initialState, 
  },
});

export const { setPreferences, clearPreferences } = preferenceSlice.actions
export default preferenceSlice.reducer
