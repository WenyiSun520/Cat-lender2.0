import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { petEventDeletedById } from "../features/petEvents/petEventsSlice";
import { eventsDateDeleted } from "../features/petEvents/petEventsDateSlice";
export default function DisplayEventSyntax(props) {
  let event = props.event;
  const dispatch = useDispatch();
  const handleEventDelete = () => {
    dispatch(petEventDeletedById({ eventId: event.id }));
    dispatch(eventsDateDeleted({ date: event.date, eventId: event.id }));
  };
  return (
    <div className="event-card" key={event.id}>
      <h3 className="event-content">
        {event.pets}: {event.title}
      </h3>
      <h4 className="event-content">
        Start at: {event.start_time}, {event.date}
      </h4>
      <p className="event-content">{event.description}</p>
      <div className="eventBtnMenu">
        <Link className="editEventsLink" to={`/editEventForm/${event.id}`}>
          Edit Reminder
        </Link>
        <button className="deleteEventBtn" onClick={handleEventDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
