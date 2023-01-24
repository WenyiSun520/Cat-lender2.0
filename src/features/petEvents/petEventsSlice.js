import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    pets: "snappy",
    title: "de-worm",
    date: "2023-01-23",
    start_time: "1:00 pm",
    description: "revolution plus deworm is the best",
  },
  {
    id: "2",
    pets: "eggy",
    title: "annunal health exam",
    date: "2023-01-24",
    start_time: "10:00 am",
    description: "Fremont Animal Hospital",
  },
];

const petEventsSlice = createSlice({
  name: "petsEvents",
  initialState,
  reducers: {
    petEventAdded: {
      reducer(state, action) {
        // console.log("im petenentadded reducer");
        state.push(action.payload);
      },
      //prepare callback function to generate random value
      prepare(pets, title, date, start_time, description) {
        return {
          payload: {
            id: nanoid(),
            pets,
            title,
            date,
            start_time,
            description,
          },
        };
      },
    },
    petEventUpdated(state, action) {
      const { id, pets, title,date, start_time, description} = action.payload;
      const updatedEvent = state.find((event) => event.id === id);
      if (updatedEvent) {
        updatedEvent.pets = pets;
        updatedEvent.title = title;
        updatedEvent.date = date;
        updatedEvent.start_time = start_time;
        updatedEvent.description = description;

      }
    },
  },
});

export const { petEventAdded, petEventUpdated } = petEventsSlice.actions;
export default petEventsSlice.reducer;
