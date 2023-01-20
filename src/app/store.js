import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import petProfilesReducer from "../features/petProfile/petProfileSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    petsProfile: petProfilesReducer,
  },
});
