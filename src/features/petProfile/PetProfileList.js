import React from "react";
import { useSelector } from "react-redux";
import {AddPetForm} from './AddPetForm';

export const PetProfileList = () => {
  const profiles = useSelector((state) => state.petsProfile);
  const renderedProfiles = profiles.map((pet)=>(
     <div className="petProfile" key={pet.id}>
        <ul>
          <li>Name:{pet.name}</li>
          <li>Age: {pet.bday}</li>
          <li>Sex:{pet.sex}</li>
          <li>Breed:{pet.breed}</li>
        </ul>
      </div>
  ))


  return (
    <section className="petProfile-list">
      <h2>Your Pets</h2>
      {renderedProfiles}
      {/* <button className="addPets-btn">
        Add Pets
      </button> */}
      <AddPetForm />
    </section>
  );
};


