import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { petEventUpdated } from "./petEventsSlice";
import { useNavigate,useParams } from "react-router-dom";

export const EditEventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const urlParams = useParams();
  const eventId = urlParams.eventId;

  const singleEvent = useSelector((state) =>
    state.petsEvent.find((event) => event.id === eventId)
  );

  const petsProfiles = useSelector((state) => state.petsProfile);
  const petsOptions = petsProfiles.map((pet) => (
    <option id={pet.id} key={pet.id} value={pet.name}>
      {pet.name}
    </option>
  ));

  const formik = useFormik({
    initialValues: {
      pet: singleEvent.pets,
      title: singleEvent.title,
      date: singleEvent.date,
      start_time: singleEvent.start_time,
      note: singleEvent.description,
    },
    onSubmit: (values) => {
      dispatch(
        petEventUpdated(
          {
          id:singleEvent.id,
          pets:values.pet, 
          title:values.title,
          date:values.date, 
          start_time:values.start_time, 
          description:values.note
          }
        )
      );
      navigate("/calender");
    },
  });

  return (
    <section className="addEventSection">
      <form className="addEventsForm" onSubmit={formik.handleSubmit}>
        <h1>Edit your Reminder</h1>
        <label htmlFor="pet">Pet:</label>
        <select
          id="pet"
          name="pet"
          value={formik.values.pet}
          onChange={formik.handleChange}
        >
          <option value="">Select a pet</option>
          {petsOptions}
        </select>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          name="date"
          onBlur={(e) => (e.target.type = "text")}
          onFocus={(e) => (e.target.type = "date")}
          onChange={formik.handleChange}
          value={formik.values.date}
        />

        <label htmlFor="start_time">Start At</label>
        <input
          type="time"
          className="start_time"
          name="start_time"
          onChange={formik.handleChange}
          value={formik.values.startTime}
        ></input>

        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          name="note"
          rows="10"
          cols="30"
          onChange={formik.handleChange}
          value={formik.values.note}
        />
        <button className="eventsubmit-btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
