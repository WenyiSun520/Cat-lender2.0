import React from "react";
import { useSelector } from "react-redux";
import DisplayEventSyntax from "../../util/DisplayEventsSyntax";

export const RenderAllPetEvent = () => {
  const eventsList = useSelector((state) => state.petsEvent);
  let validEventsList = [];
  let pastDueEventsList = [];
  let curDate = new Date().setMilliseconds(0);
  for (let i = 0; i < eventsList.length; i++) {
    let eventsDate = new Date(eventsList[i].date).getTime();

    if (eventsDate - curDate > 0) {
      // event is still valid
      validEventsList.push(eventsList[i]);
    } else {
      // event is past due
      pastDueEventsList.push(eventsList[i]);
    }
  }

  let sortedEventsList = validEventsList
    .slice()
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  let results = sortedEventsList.map((event) => DisplayEventSyntax(event));
  return (
    <div className="reminder all-reminder">
      <h3>All Upcoming Events:</h3>
      {results}
    </div>
  );
};
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
