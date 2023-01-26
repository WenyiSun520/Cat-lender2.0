import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  MyTextInput,
  MyOtherInput,
  MySelection,
} from "../../formik/formikComponents";
import { breedsList } from "../../data/breed";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { petProfileUpdated } from "./petProfileSlice";
import { petEventNameUpdated } from "../petEvents/petEventsSlice";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const EditPetForm = () => {
  const urlParams = useParams();
  let profileId = urlParams.profileId;
  const singleProfile = useSelector((state) =>
    state.petsProfile.find((profile) => profile.id === profileId)
  );
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
          name: singleProfile.name,
          bday: singleProfile.bday,
          sex: singleProfile.sex,
          breed: singleProfile.breed,
          vetsInfo: {
            vetsName: singleProfile.vetsInfo.vetsName,
            vetsPhone: singleProfile.vetsInfo.vetsPhone,
            vetsEmail: singleProfile.vetsInfo.vetsEmail,
            vetsUrl: singleProfile.vetsInfo.vetsUrl,
          },
        }}
        validationSchema={Yup.object({
          name: Yup.string()
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
          // if user change the pets name, the event relevant to the pets also need to update the pet name
          if (singleProfile.name !== values.petname) {
            dispatch(
              petEventNameUpdated({
                updatedName: values.name,
                originalName: singleProfile.name,
              })
            );
          }
          dispatch(
            petProfileUpdated({
              id: profileId,
              name: values.name,
              bday:values.bday,
              sex:values.sex,
              breed:values.breed,
              vetsInfo: values.vetsInfo
            })
          );

          navigate(`/profiles/${profileId}`);
        }}
      >
        {(formik) => (
          <Form className="editPetForm" onSubmit={formik.handleSubmit}>
            <h2>Edit your pets profile</h2>
            <MyTextInput label="Name" name="name" />
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
              Update Profile
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
