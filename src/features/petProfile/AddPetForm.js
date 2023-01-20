import React, { useState } from "react";
import { breedsList } from "../../data/breed";
import { useDispatch } from "react-redux";
import { petProfileAdded } from "./petProfileSlice";

export const AddPetForm = () => {
  const [breedlist, setBreedlist] = useState([]);
  const [petname, setPetname] = useState("");
  const [bday, setBday] = useState("");
  const [sex, setSex] = useState("");
  const [breed, setBreed] = useState("");
  const dispatch = useDispatch();

  const renderBreedsList = () => {
    let breedsOption = breedsList.map((breed) => (
      <option key={breed} value={breed}>
        {breed}
      </option>
    ));
    setBreedlist(breedsOption);
  };

  const onPetnameChanged = (e) => setPetname(e.target.value);
  const onBdayChanged = (e) => setBday(e.target.value);
  const onBreedChanged = (e) => setBreed(e.target.value);
  const onSexChanged = (e) => setSex(e.target.value);
  const onSavePetProfileClicked = () => {
    if (petname && bday && sex && breed) {
        dispatch(petProfileAdded(petname,bday,sex,breed));
        // setPetname('');
        // setBday('');
        // setBreed('');
        // setSex('')
    }
  };

  return (
    <section>
      <h2>Add your pets profile</h2>
      <form className="addPetForm">
        <label htmlFor="petname">Name:</label>
        <input
          type="text"
          id="petname"
          name="petnamee"
          value={petname}
          onChange={onPetnameChanged}
        />
        <label htmlFor="bday">Birthday:</label>
        <input
          type="date"
          id="bday"
          name="bday"
          value={bday}
          onChange={onBdayChanged}
        />

        <div onChange={onSexChanged}>
          <input type="radio" id="male" name="sex" value="Male" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="sex" value="Female" />
          <label htmlFor="female">Female</label>
        </div>

        <label htmlFor="breeds">Breeds:</label>
        <select
          name="breeds"
          id="breeds"
          value={breed}
          onClick={renderBreedsList}
          onChange={onBreedChanged}
        >
          {breedlist}
        </select>

        <button type="button" onClick={onSavePetProfileClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};
