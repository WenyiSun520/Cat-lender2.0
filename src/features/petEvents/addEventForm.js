import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { petEventAdded } from "./petEventsSlice";
import { useNavigate } from "react-router-dom";
import { addDate } from "../../util/checkDateHasEventsMap";
import { adjustDateSyntax } from "../../util/AdjustDateSyntax";
import {
  MyTextInput,
  MyOtherInput,
  MySelection,
  MyTextArea,
} from "../../formik/formikComponents";


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

  return (
    <section className="addEventSection">
      <Formik
        initialValues={{
          pet: "",
          title: "",
          date: dateInFormat,
          start_time: "",
          note: "",
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
        }}
      >
        {(formik) => (
          <Form className="addEventsForm" onSubmit={formik.handleSubmit}>
            <h1>Add Reminder</h1>
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
              placeholder={dateInFormat}
            />
            <MyOtherInput label="Start At" name="start_time" type="time" />
            <MyTextArea label="Note" name="note" placeholder={"Notes lengther must less than 150 characters"}/>
            <button className="eventsubmit-btn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
