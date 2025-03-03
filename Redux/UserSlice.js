// // userSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isLoggedIn: false,  // Default to false until the user logs in
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserLoggedIn: (state) => {
//       state.isLoggedIn = true;  // Set to true when user is logged in
//     },
//     setUserLoggedOut: (state) => {
//       state.isLoggedIn = false; // Set to false when user is logged out
//     },
//   },
// });

// export const { setUserLoggedIn, setUserLoggedOut } = userSlice.actions;

// export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userDetails: {}, 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.userDetails = action.payload;  
    },
    setUserLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.userDetails = {};  
    },
  },
});

export const { setUserLoggedIn, setUserLoggedOut } = userSlice.actions;

export default userSlice.reducer;
