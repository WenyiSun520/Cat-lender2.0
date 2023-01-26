import { configureStore } from '@reduxjs/toolkit';
import petProfilesReducer from "../features/petProfile/petProfileSlice";
import petEventsSliceReducer from '../features/petEvents/petEventsSlice';
import petEventsDateSlice from '../features/petEvents/petEventsDateSlice';

export const store = configureStore({
  reducer: {
    petsProfile: petProfilesReducer,
    petsEvent: petEventsSliceReducer,
    petsEventDate: petEventsDateSlice,
  },
});
