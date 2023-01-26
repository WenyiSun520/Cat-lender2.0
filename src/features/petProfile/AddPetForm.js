import React from "react";
import { breedsList } from "../../data/breed";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { petProfileAdded } from "./petProfileSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  MyTextInput,
  MyOtherInput,
  MySelection,
} from "../../formik/formikComponents";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const AddPetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const renderBreedsList = breedsList.map((breed) => (
    <option key={breed} value={breed}>
      {breed}
    </option>
  ));
  return (
    <section className="addpet-section">
      <Formik
        initialValues={{
          petname: "",
          bday: "",
          sex: "",
          breed: "",
          vetsInfo: {
            vetsName: "",
            vetsPhone: "",
            vetsEmail: "",
            vetsUrl: "",
          },
        }}
        validationSchema={Yup.object({
          petname: Yup.string()
            .max(20, "Pet name must be 20 characters or less")
            .required("Required"),
          bday: Yup.date()
            .min(new Date("1970-01-01"), "Pet birday can't go below 1970")
            .max(new Date(), "Pet birthday can't go over current date")
            .required("Required"),
          breed: Yup.string()
            .oneOf(breedsList, "Invalid Pet Type")
            .required("Required"),
          vetsInfo: Yup.object({
            vetsName: Yup.string().max(
              30,
              "Pet name must be 30 characters or less"
            ),
            vetsPhone: Yup.string().matches(
              phoneRegExp,
              "invalid phone number"
            ),
            vetsEmail: Yup.string().email("invalid email"),
            vetsUrl: Yup.string().url("Invalid url syntax"),
          }),
        })}
        onSubmit={(values) => {
          dispatch(
            petProfileAdded(
              values.petname,
              values.bday,
              values.sex,
              values.breed,
              values.vetsInfo
            )
          );
          navigate("/");
        }}
      >
        {(formik) => (
          <Form className="addPetForm" onSubmit={formik.handleSubmit}>
            <h1>Add New Pet</h1>
            <MyTextInput label="Name" name="petname" />
            <MyOtherInput
              label="Birthday"
              name="bday"
              type="date"
              min="1970-01-01"
              max={new Date().toISOString().substring(0, 10)}
            ></MyOtherInput>
            <label>Sex: </label>
            <div className="petSex-radio">
              <label>
                <Field type="radio" id="Male" name="sex" value="Male" />
                Male
              </label>
              <label>
                <Field type="radio" id="female" name="sex" value="Female" />
                Female
              </label>
            </div>
            <MySelection label="Breed" name="breed">
              <option value="">Choose A Breed</option>
              {renderBreedsList}
            </MySelection>
            <label>Vets Information: </label>
            <MyTextInput
              label="Vets Name"
              id="vetsName"
              name="vetsInfo.vetsName"
            />
            <MyOtherInput
              label="Vets Phone Number"
              id="vetsPhone"
              name="vetsInfo.vetsPhone"
              type="tel"
              placeholder="0000000000"
            />
            <MyOtherInput
              label="Vets Email"
              id="vetsEmail"
              name="vetsInfo.vetsEmail"
              type="email"
            />
            <MyOtherInput
              label="Vets Website Url"
              id="vetsUrl"
              name="vetsInfo.vetsUrl"
              type="url"
              placeholder="https://example.com"
              pattern="https://.*"
            />
            <button type="submit" className="petProfileSubmitBtn">
              Save Profile
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
