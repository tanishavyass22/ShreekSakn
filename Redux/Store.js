import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import userReducer from './UserSlice';
import filterReducer from './FilterSlice'
import RoommatefilterReducer from './RoommatefilterSlice'
import preferenceReducer from './NewRoommatePreferenceSlice'
import existingReducer from './ExistingRoommateSlice'
import WantedReducer from './RoommateWantenSlice'
const persistConfig = {
  key: 'root_v2',
  storage: AsyncStorage,
  blacklist: ['register'], 
};

const rootReducer = combineReducers({
  user: userReducer,
  filters: filterReducer,
  Roommatefilters: RoommatefilterReducer, 
  preferences: preferenceReducer,
  existing : existingReducer,
  wantedInfo: WantedReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});
export const persistor = persistStore(store);
