import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { petEventAdded } from "./petEventsSlice";
import { useNavigate } from "react-router-dom";
import { addDate } from "../../util/checkDateHasEventsMap";
import { adjustDateSyntax } from "../../util/AdjustDateSyntax";


export const AddEventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const petsProfiles = useSelector((state) => state.petsProfile);
  const petsOptionValues = [];
  const petsOptions = petsProfiles.map((pet) => {
    petsOptionValues.push(pet.name);
    return (
      <option id={pet.id} key={pet.id} value={pet.name}>
        {pet.name}
      </option>
    );
  });

  let date = new Date();
  let dateInFormat = adjustDateSyntax(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );

  const formik = useFormik({
    initialValues: {
      pet: "",
      title: "",
      date: dateInFormat,
      start_time: "",
      note: "",
    },
    validationSchema: Yup.object({
      pet: Yup.string().oneOf(petsOptionValues).required("Required"),
      title: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      date: Yup.date().required("Required"),
      note: Yup.string().max(300, "Must be 150 characters or less"),
    }),
    onSubmit: (values) => {
      addDate(values.date); // add date to dateHasEventsMap
      dispatch(
        petEventAdded(
          values.pet,
          values.title,
          values.date,
          values.start_time,
          values.note
        )
      );
      navigate("/calender");
    },
  });
  return (
    <section className="addEventSection">
      <form className="addEventsForm" onSubmit={formik.handleSubmit}>
        <h1>Add Reminder</h1>

        <label htmlFor="pet">Pet:</label>
        <select id="pet" name="pet" {...formik.getFieldProps("pet")}>
          <option value="">Select a pet</option>
          {petsOptions}
        </select>
        {formik.touched.pet && formik.errors.pet ? (
          <div className="formikErrorMsg">{formik.errors.pet}</div>
        ) : null}

        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          {...formik.getFieldProps("title")}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="formikErrorMsg">{formik.errors.title}</div>
        ) : null}

        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          name="date"
          // onBlur={(e) => (e.target.type = "text")}
          onFocus={(e) => (e.target.type = "date")}
          {...formik.getFieldProps("date")}
          placeholder={dateInFormat}
        />
        {formik.touched.date && formik.errors.date ? (
          <div className="formikErrorMsg">{formik.errors.date}</div>
        ) : null}

        <label htmlFor="start_time">Start At</label>
        <input
          type="time"
          className="start_time"
          name="start_time"
          {...formik.getFieldProps("start_time")}
        ></input>
        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          name="note"
          rows="10"
          cols="10"
          {...formik.getFieldProps("note")}
          placeholder={"Notes lengther must less than 150 characters"}
        />
        {formik.touched.note && formik.errors.note ? (
          <div className="formikErrorMsg">{formik.errors.note}</div>
        ) : null}

        <button className="eventsubmit-btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
