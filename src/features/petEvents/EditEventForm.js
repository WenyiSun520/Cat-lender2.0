import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { petEventUpdated } from "./petEventsSlice";
import { eventsDateUpdated, eventsDateDeleted } from "./petEventsDateSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  MyTextInput,
  MyOtherInput,
  MySelection,
  MyTextArea,
} from "../../formik/formikComponents";

export const EditEventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const urlParams = useParams();
  const eventId = urlParams.eventId;

  const singleEvent = useSelector((state) =>
    state.petsEvent.find((event) => event.id === eventId)
  );

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

  return (
    <section className="addEventSection">
      <Formik
        initialValues={{
          pet: singleEvent.pets,
          title: singleEvent.title,
          date: singleEvent.date,
          start_time: singleEvent.start_time,
          note: singleEvent.description,
        }}
        validationSchema={Yup.object({
          pet: Yup.string()
            .oneOf(petsOptionValues, "Invalid Pet")
            .required("Required"),
          title: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
          date: Yup.date().required("Required"),
          note: Yup.string().max(300, "Must be 150 characters or less"),
        })}
        onSubmit={(values) => {
          dispatch(
            petEventUpdated({
              id: singleEvent.id,
              pets: values.pet,
              title: values.title,
              date: values.date,
              start_time: values.start_time,
              description: values.note,
            })
          );
          if (singleEvent.date !== values.date) {
            dispatch(
              eventsDateDeleted({
                date: singleEvent.date,
                eventId: singleEvent.id,
              })
            );
            dispatch(
              eventsDateUpdated({
                date: values.date,
                eventId: singleEvent.id,
              })
            );
          }
          navigate("/calender");
        }}
      >
        {(formik) => (
          <Form className="addEventsForm" onSubmit={formik.handleSubmit}>
            <h1>Edit Reminder</h1>
            <MySelection label="Pet" name="pet">
              <option value="">Select a pet</option>
              {petsOptions}
            </MySelection>
            <MyTextInput label="Title" name="title" type="text" />
            <MyTextInput
              label="Date"
              name="date"
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              placeholder={singleEvent.date}
            />
            <MyOtherInput label="Start At" name="start_time" type="time" />
            <MyTextArea
              label="Note"
              name="note"
              placeholder={singleEvent.description}
            />
            <button className="eventsubmit-btn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
