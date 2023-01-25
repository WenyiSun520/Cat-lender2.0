import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { petEventAdded } from "./petEventsSlice";
import { useNavigate } from "react-router-dom";
import { hasEventsDateSet } from "../../data/dateHasEvents";


export const AddEventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const petsProfiles = useSelector((state) => state.petsProfile);
  const petsOptions = petsProfiles.map((pet) => (
    <option id={pet.id} key={pet.id} value={pet.name}>
      {pet.name}
    </option>
  ));

  let date = new Date();
  let dateInFormat =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  const formik = useFormik({
    initialValues: {
      pet: "",
      title: "",
      date: dateInFormat,
      start_time: "",
      note: "",
    },
    onSubmit: (values) => {
      hasEventsDateSet.add(values.date);
      dispatch(petEventAdded(values.pet, values.title, values.date, values.start_time, values.note));
      navigate("/calender");
    },
  });

  return (
    <section className="addEventSection">
      <form className="addEventsForm" onSubmit={formik.handleSubmit}>
        <h1>Add Reminder</h1>
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
          placeholder={dateInFormat}
        />

        <label htmlFor="start_time">Start At</label>
        <input
          type="time"
          className="start_time"
          name="start_time"
          onChange={formik.handleChange}
          value={formik.values.startTime}
        ></input>
        {/* <label htmlFor="event-end">To</label>
          <input type="time" className="event-end" name="event-end"></input> */}

        {/* <label htmlFor="type">Type</label>
        <select
          id="type"
          name="type"
          onChange={formik.handleChange}
          value={formik.values.type}
        >
          <option value="">Select a categories</option>
          <option value="grooming">Grooming</option>
          <option value="deworm">Deworm</option>
          <option value="Other">Other</option>
        </select> */}

        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          name="note"
          rows="10"
          cols="30"
          onChange={formik.handleChange}
          value={formik.values.note}
        />
        <button className="eventsubmit-btn" type="submit">Submit</button>
      </form>
    </section>
  );
};
