import React, { useState } from "react";
import { breedsList } from "../../data/breed";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { petProfileUpdated } from "./petProfileSlice";

export const EditPetForm = () => {
  const urlParams = useParams();
  let profileId = urlParams.profileId;
  const singleProfile = useSelector((state) =>
    state.petsProfile.find((profile) => profile.id === profileId)
  );
  const [breedlist, setBreedlist] = useState([]);
  const [petname, setPetname] = useState(singleProfile.name);
  const [bday, setBday] = useState(singleProfile.bday);
  const [sex, setSex] = useState(singleProfile.sex);
  const [breed, setBreed] = useState(singleProfile.breed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const onUpdatePetProfileClicked = () => {
    // console.log("im in onSavePetProileClicked")
    dispatch(petProfileUpdated({ id: profileId, name:petname, bday, sex, breed }));
    navigate(`/profiles/${profileId}`);
  };

  return (
    <section className="addpet-section">
      <h2>Edit your pets profile</h2>
      <form className="editPetForm">
        <label htmlFor="petname">Name:</label>
        <input
          type="text"
          id="petname"
          name="petname"
          placeholder={petname}
          value={petname}
          onChange={onPetnameChanged}
        />
        <label htmlFor="bday">Birthday:</label>
        <input
          type="date"
          id="bday"
          name="bday"
          placeholder={bday}
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
          placeholder={breed}
          onClick={renderBreedsList}
          onChange={onBreedChanged}
        >
          <option value="">Choose A Breed</option>
          {breedlist}
        </select>

        <button type="button" onClick={onUpdatePetProfileClicked}>
          Update Post
        </button>
      </form>
    </section>
  );
};
