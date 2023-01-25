
import { Link } from "react-router-dom";

export default function DisplayEventSyntax(event){
    return (
      <div className="events" key={event.id}>
        <h3>
          {event.pets}: {event.title}
        </h3>
        <h4>
          Start at: {event.start_time}, {event.date}
        </h4>
        <p>{event.description}</p>
        <Link to={`/editEventForm/${event.id}`}>Edit Event</Link>
      </div>
    );
}