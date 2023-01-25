import React from "react";
import { useSelector } from "react-redux";
import DisplayEventSyntax from '../../util/DisplayEventsSyntax'

export const RenderAllPetEvent = () =>{
  const eventsList = useSelector((state) => state.petsEvent).map(
    (event) => DisplayEventSyntax(event)
  );
  return (
    <div className="reminder">
      <h3>All Events:</h3> {eventsList}
    </div>
  );

}
export const PetEventsList = (props) => {
  const selectedDate = props.selectedDate;
  let timesOfSelecedDate = new Date(selectedDate).setMilliseconds(0);
  const eventsList = useSelector((state) => state.petsEvent);
  const renderedEvent = eventsList
    .filter((event) => {
      return new Date(event.date).getTime() - timesOfSelecedDate === 0;
    })
    .map((event) => DisplayEventSyntax(event));

  return <div className="reminder">{renderedEvent}</div>;
};

