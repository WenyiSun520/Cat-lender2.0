import React from "react";
import { useSelector } from "react-redux";
import DisplayEventSyntax from "../../util/DisplayEventsSyntax";
import { adjustDateSyntax } from "../../util/AdjustDateSyntax";


export const RenderAllPetEvent = () => {
  const eventsList = useSelector((state) => state.petsEvent);
  let validEventsList = [];
  let pastDueEventsList = [];
  let curDate = new Date();
  curDate = adjustDateSyntax(
    curDate.getFullYear(),
    curDate.getMonth() + 1,
    curDate.getDate()
  );
  let curDateInMillSec = new Date(curDate).getTime();
  for (let i = 0; i < eventsList.length; i++) {
    let eventsDate = new Date(eventsList[i].date).getTime();
    if (eventsDate - curDateInMillSec >= 0) {
      // event is still valid
      validEventsList.push(eventsList[i]);
    } else {
      // event is past due
      pastDueEventsList.push(eventsList[i]);
    }
  }
  let sortedEventsList = validEventsList
    .slice()
    .sort((a, b) => new Date(a.date, a.start_time).getTime() - new Date(b.date, b.start_time).getTime());
  let sortedPastDueEventsList = pastDueEventsList
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  let results = sortedEventsList.map((event) => (
    <DisplayEventSyntax key={event.id} event={event} />
  ));
  let old = sortedPastDueEventsList.map((event) => (
    <DisplayEventSyntax key={event.id} event={event} />
  ));

  return (
    <div className="all-reminder">
      <h3>All Upcoming Events:</h3>
      {results}
      <h3>Achieved Events:</h3>
      {old}
    </div>
  );
};
//render today's valid events below calender
export const PetEventsList = (props) => {
  const selectedDate = props.selectedDate;
  let timesOfSelecedDate = new Date(selectedDate).setMilliseconds(0);
  const eventsList = useSelector((state) => state.petsEvent);
  const renderedEvent = eventsList
    .filter((event) => {
      return new Date(event.date).getTime() - timesOfSelecedDate === 0;
    })
    .map((event) => <DisplayEventSyntax key={event.id} event={event} />);
  let sortedEventsList = renderedEvent
    .slice()
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return <div className="reminder">{sortedEventsList}</div>;
};
