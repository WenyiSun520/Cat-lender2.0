import { createSlice} from "@reduxjs/toolkit";

const initialState = [
  {
    id: "eggy",
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
    id: "snappy",
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
      prepare(name, bday, sex, breed, vetsInfo) {
        return {
          payload: {
            id: name,
            name,
            bday,
            sex,
            breed,
            vetsInfo,
          },
        };
      },
    },
    petProfileUpdated(state, action) {
      const { id, name, bday, sex, breed, vetsInfo } = action.payload;
      const updatedProfile = state.find((profile) => profile.id === id);
      if (updatedProfile) {
        updatedProfile.name = name;
        updatedProfile.bday = bday;
        updatedProfile.sex = sex;
        updatedProfile.breed = breed;
        updatedProfile.vetsInfo = vetsInfo;
      }
    },
    petProfileDeleted(state, action) {
      const profileId = action.payload.profileId;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === profileId) {
          state.splice(i, 1);
          break;
        }
      }
    },
  },
});
export const { petProfileAdded, petProfileUpdated, petProfileDeleted } =
  petProfileSlice.actions;
export default petProfileSlice.reducer;
