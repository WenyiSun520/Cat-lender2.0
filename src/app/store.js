import { configureStore } from '@reduxjs/toolkit';
import petProfilesReducer from "../features/petProfile/petProfileSlice";
import petEventsSliceReducer from '../features/petEvents/petEventsSlice';

export const store = configureStore({
  reducer: {
    petsProfile: petProfilesReducer,
    petsEvent: petEventsSliceReducer
  },
});
