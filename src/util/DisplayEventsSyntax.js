import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { petEventDeleted } from "../features/petEvents/petEventsSlice";
import { deleteDate } from "./checkDateHasEventsMap";

export default function DisplayEventSyntax(event) {
  const dispatch = useDispatch();
  const handleEventDelete = () => {
    dispatch(petEventDeleted({ eventId: event.id }));
    deleteDate(event.date); //delete the date from dateHasEventsMap
  };;
  return (
    <div className="events" key={event.id}>
      <h3>
        {event.pets}: {event.title}
      </h3>
      <h4>
        Start at: {event.start_time}, {event.date}
      </h4>
      <p>{event.description}</p>
      <div className="eventBtnMenu">
        <Link className="editEventsLink" to={`/editEventForm/${event.id}`}>
          Edit Event
        </Link>
        <button
          className="deleteEventBtn"
          onClick={handleEventDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

