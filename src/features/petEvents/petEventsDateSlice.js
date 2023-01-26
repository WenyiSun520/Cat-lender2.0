import { createSlice } from "@reduxjs/toolkit";
//  This redux reducer works closely with the calender components,
//  it will determined if any days in calender should has the cat icon as notification of events.
//  events array in the state is the array of eventsId
const initialState = [
  {
    date: "2023-01-24",
    events: ["1", "2"],
  },
  {
    date: "2023-01-28",
    events: ["3"],
  },
  {
    date: "2023-02-01",
    events: ["4"],
  },
  {
    date: "2023-03-15",
    events: ["5"],
  },
];

const petEventsDateSlice = createSlice({
  name: "petsEventsDate",
  initialState,
  reducers: {
    eventsDateUpdated(state, action) {
      const dateString = action.payload.date;
      const eventId = action.payload.eventId;
      let hasEvent = false;

      for (let i = 0; i < state.length; i++) {
        // loop though the states,
        if (state[i].date === dateString) {
          // if the date already has other events,
          hasEvent = true;
          state[i].events.push(eventId); // push the new events
        }
      }
      // create an obj since the date hasn't have a events before
      if (!hasEvent) {
        state.push({ date: dateString, events: [eventId] });
      }
    },
    eventsDateDeleted(state, action) {
      const dateString = action.payload.date;
      const eventId = action.payload.eventId;
      for (let i = 0; i < state.length; i++) {
        //loop through the states,
        // find the obj with dateString, and check if the event is the only one
        if (state[i].date === dateString && state[i].events.length === 1) {
          state.splice(i, 1); // yes, remove the obj
        } else if (
          state[i].date === dateString &&
          state[i].events.length !== 1
        ) {
          // no, find the eventId from the arr,  and remove it
          for (let j = 0; j < state[i].events.length; j++) {
            if (state[i].events[j] === eventId) {
              state[i].events.splice(j, 1);
              break;
            }
          }
        }
      }
    },
    mutiEventsDateDeleted(state, action) {
      const events = action.payload.events; // an array of events that need to be deleted
      console.log("events", events);
      for (let i = 0; i < events.length; i++) {
        // loop through the events Arr
        let date = events[i].date; // for each event, get the dateStr and eventId
        let eventId = events[i].id;
        console.log("date and eventId: " + date + " , " + eventId);
        for(let j=0; j <  state.length;j++){
          if (state[j].date === date) {
            // find the obj that contains the date
            state[j].events = state[j].events.filter((id) => id !== eventId); // find the obj of the dateStr, and remove the eventsId by filtering
            console.log("obj.events: " + state[j].events);
          }
          if (state[j].events.length === 0) {
            // lastly, check if the events Arr is empty. if yes, remove the obj
            state.splice(j, 1);
            break;
          }
        }

        }
    },
  },
});
export const { eventsDateUpdated, eventsDateDeleted, mutiEventsDateDeleted } =
  petEventsDateSlice.actions;
export default petEventsDateSlice.reducer;
