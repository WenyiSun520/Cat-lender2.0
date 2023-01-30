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
        <Link
          className="editEventsLink rippleEffect"
          to={`/editEventForm/${event.id}`}
        >
          <span>Edit Reminder</span>
        </Link>
        <button
          className="deleteEventBtn rippleEffect"
          onClick={handleEventDelete}
        >
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}
