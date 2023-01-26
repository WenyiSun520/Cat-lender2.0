import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "eggy",
    bday: "2021-09-01",
    sex: "male",
    breed: "domestic shorthair",
    vetsInfo: {
      vetsName: "Fremont Animal Hospital",
      vetsPhone: "(206) 593-2442",
      vetsEmail: "hello@fremontvets.com",
      vetsUrl: "https://fremontvets.com/",
    },
  },
  {
    id: "2",
    name: "snappy",
    bday: "2021-11-21",
    sex: "male",
    breed: "domestic shorthair",
    vetsInfo: {
      vetsName: "Fremont Animal Hospital",
      vetsPhone: "(206) 593-2442",
      vetsEmail: "hello@fremontvets.com",
      vetsUrl: "https://fremontvets.com/",
    },
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
      prepare(name, bday, sex, breed,vetsInfo) {
        return {
          payload: {
            id: nanoid(),
            name,
            bday,
            sex,
            breed,
            vetsInfo
          },
        };
      },
    },
  petProfileUpdated(state, action) {
    const { id,name, bday, sex, breed } = action.payload;
    const updatedProfile = state.find(profile =>profile.id ===id);
    if(updatedProfile){
      updatedProfile.name = name;
      updatedProfile.bday = bday;
      updatedProfile.sex = sex;
      updatedProfile.breed = breed;
    }
  },
}
});
export const { petProfileAdded, petProfileUpdated } = petProfileSlice.actions;
export default petProfileSlice.reducer;
