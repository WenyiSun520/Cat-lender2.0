import React from "react";
import { useSelector } from "react-redux";


export const PetEventsList = (props) => {
  const selectedDate = props.selectedDate;
  let timesOfSelecedDate = new Date(selectedDate).setMilliseconds(0);
  // console.log(selectedDate);
  // console.log(timesOfSelecedDate);
  // console.log(new Date("2023-01-23").setMilliseconds(0));
  const eventsList = useSelector((state) => state.petsEvent);
  const renderedEvent = eventsList
      .filter((event)=>{
        return new Date(event.date).getTime()-timesOfSelecedDate === 0;
      })
      .map((event) => (
      <div className="events" key={event.id}>
        <h3>
          {event.pets}: {event.title}
        </h3>
        <h4>
          Start at: {event.start_time} {event.date}
        </h4>
        <p>{event.description}</p>
      </div>
    ));

  return (
      <div className="reminder">{renderedEvent}</div>
  );
};
