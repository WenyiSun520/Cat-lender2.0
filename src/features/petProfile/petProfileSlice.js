import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "eggy",
    bday: "2021-09-01",
    sex: "male",
    breed: "domestic shorthair",
  },
  {
    id: "2",
    name: "snappy",
    bday: "2021-11-21",
    sex: "male",
    breed: "domestic shorthair",
  },
];

const petProfileSlice = createSlice({
  name: "petProfiles",
  initialState,
  reducers: {
    petProfileAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      //prepare callback function to generate random value
      prepare(name, bday, sex, breed) {
        return {
          payload: {
            id: nanoid(),
            name,
            bday,
            sex,
            breed
          },
        };
      },
    },
  },
});
export const { petProfileAdded } = petProfileSlice.actions;
export default petProfileSlice.reducer;
