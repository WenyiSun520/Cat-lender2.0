import React from "react";
import { useSelector } from "react-redux";
import { AddPetForm } from "./AddPetForm";

export const PetProfileList = () => {
  const profiles = useSelector((state) => state.petsProfile);
  const renderedProfiles = profiles.map((pet) => (
    <div className="petProfile" key={pet.id}>
      <img className="img-profile" src="./img/cat.jpeg"></img>
      <ul>
        <li>Name:{pet.name}</li>
        <li>Age: {ageCalculation(pet.bday)}</li>
        <li>Sex:{pet.sex}</li>
        <li>Breed:{pet.breed}</li>
      </ul>
    </div>
  ));

  return (
    <section className="petProfilePage">
      <h2>Your Pets</h2>
      <div className="petProfileList">{renderedProfiles}</div>
      <AddPetForm />
    </section>
  );
};

function ageCalculation(bday) {
  let birthday = new Date(bday);
  let month = bday.substring(5, 7);
  // let day = bday.substring(8, 10);

   let ageInmillSec= Date.now()-birthday.getTime();
   let agesDf = new Date(ageInmillSec);
   let years = agesDf.getFullYear();
   let agesInYear = Math.abs(years - 1970);
   let agesInMonth = 12 - month + agesDf.getMonth();
   //let agesInDays = 
   
   return agesInYear+ " years old, "+agesInMonth+" months old";
  
}
