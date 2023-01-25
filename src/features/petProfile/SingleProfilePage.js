import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import DisplayEventSyntax from "../../util/DisplayEventsSyntax";

import AgeCalculation from "../../util/AgeCalculater";

export const SingleProfile = (props) => {
  const navigate = useNavigate();
  const urlParams = useParams();
  let profileId = urlParams.profileId;

  const singleProfile = useSelector((state) =>
    state.petsProfile.find((profile) => profile.id === profileId)
  );
  if (!singleProfile) {
    navigate("*");
  }

  return (
    <section className="singleProfile">
      <div className="profile">
        <img
          className="img-profile"
          src="./img/cat.jpeg"
          alt="sample profile"
        />
        <ul>
          <li>Name: {singleProfile.name}</li>
          <li>Birthday: {singleProfile.bday}</li>
          <li>Age: {AgeCalculation(singleProfile.bday)}</li>
          <li>Sex: {singleProfile.sex}</li>
          <li>Breed: {singleProfile.breed}</li>
        </ul>
        <Link
          to={`/editPetForm/${singleProfile.id}`}
          className="editProfileBtn"
        >
          Edit Profile
        </Link>
      </div>
      <div className="all-events">
        <DisplayEvents petName={singleProfile.name} />
      </div>
    </section>
  );
};

const DisplayEvents = (props) => {
  let petname = props.petName;
  const events = useSelector((state) =>
    state.petsEvent.filter((profile) => profile.pets === petname)
  );
  const renderedEvents = events.map((event) => DisplayEventSyntax(event));
  return renderedEvents;
};
