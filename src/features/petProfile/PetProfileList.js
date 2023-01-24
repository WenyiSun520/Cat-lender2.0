import React from "react";
import { useSelector } from "react-redux";
// import { AddPetForm } from "./AddPetForm";
import {useNavigate, Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus
} from "@fortawesome/free-regular-svg-icons";
import AgeCalculation from '../../util/AgeCalculater'


export const PetProfileList = () => {
  const navigate = useNavigate();
  const profiles = useSelector((state) => state.petsProfile);
  const renderedProfiles = profiles.map((pet) => (
    <div className="petProfile" key={pet.id}>
      <img className="img-profile" src="./img/cat.jpeg" alt="sample profile" />
      <ul>
        <li>Name:{pet.name}</li>
        <li>Age: {AgeCalculation(pet.bday)}</li>
        <li>Sex:{pet.sex}</li>
        <li>Breed:{pet.breed}</li>
        <Link to={`/profiles/${pet.id}`}>View Profile</Link>
      </ul>
    </div>
  ));

  const handleOpenAddPetForm =()=>{
       navigate("./addPetForm");
  }

  return (
    <section className="petProfilePage">
      <h2>Your Pets</h2>
      <div className="petProfileList">
        {renderedProfiles}
        <div className="events add-profile" onClick={handleOpenAddPetForm}>
          <FontAwesomeIcon
            className="icon"
            onClick={handleOpenAddPetForm}
            icon={faSquarePlus}
          />
        </div>
      </div>
    </section>
  );
};