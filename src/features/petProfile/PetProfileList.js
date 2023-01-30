import React from "react";
import { useSelector } from "react-redux";
// import { AddPetForm } from "./AddPetForm";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import AgeCalculation from "../../util/AgeCalculater";
import { imgName } from "../../data/imgName";

export const PetProfileList = () => {
  const navigate = useNavigate();
  const profiles = useSelector((state) => state.petsProfile);
  const renderedProfiles = profiles.map((pet) => (
    <Link className="singleProfileLink" to={`/profiles/${pet.id}`} key={pet.id}>
      <div className="petProfile">
        <img
          className="img-profile"
          src={
            imgName.includes(pet.name + ".jpeg")
              ? `./img/${pet.name}.jpeg`
              : "./img/cat.jpeg"
          }
          alt="sample profile"
        />
        <ul>
          <li>Name: {pet.name}</li>
          <li>Age: {AgeCalculation(pet.bday)}</li>
          <li>Sex: {pet.sex}</li>
          <li>Breed: {pet.breed}</li>
          <button
            className="singleProfileBtn rippleEffect"
            onClick={() => navigate(`/profiles/${pet.id}`)}
          >
            <span>View Profile</span>
          </button>
        </ul>
      </div>
    </Link>
  ));

  const handleOpenAddPetForm = () => {
    navigate("./addPetForm");
  };

  return (
    <section className="petProfilePage">
      <h2>Your Pets</h2>
      <div className="petProfileList">
        {renderedProfiles}
        <div className="petProfile add-profile" onClick={handleOpenAddPetForm}>
          <FontAwesomeIcon
            className="icon"
            onClick={handleOpenAddPetForm}
            icon={faSquarePlus}
          />Add New Pet
        </div>
      </div>
    </section>
  );
};
