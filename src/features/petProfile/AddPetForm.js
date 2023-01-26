import React, { useState } from "react";
import { breedsList } from "../../data/breed";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { petProfileAdded } from "./petProfileSlice";

export const AddPetForm = () => {
  const [breedlist, setBreedlist] = useState([]);
  const [petname, setPetname] = useState("");
  const [bday, setBday] = useState("");
  const [sex, setSex] = useState("");
  const [vetsInfo, setVetsInfo] = useState({
    vetsName: "",
    vetsPhone: "",
    vetsEmail: "",
    vetsUrl: "",
  });
  const [breed, setBreed] = useState("Domestic Shorthair");
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
  const onVetsNameChanged = (e) =>
    setVetsInfo({ ...vetsInfo, vetsName: e.target.value });
  const onVetsPhoneChanged = (e) =>
    setVetsInfo({ ...vetsInfo, vetsPhone: e.target.value });

  const onVetsEmailChanged = (e) =>
    setVetsInfo({ ...vetsInfo, vetsEmail: e.target.value });

  const onVetsUrlChanged = (e) =>
    setVetsInfo({ ...vetsInfo, vetsUrl: e.target.value });

  const onSavePetProfileClicked = () => {
    if (petname && bday && sex && breed) {
      // console.log("im in onSavePetProileClicked")
      dispatch(petProfileAdded(petname, bday, sex, breed, vetsInfo));
      setPetname("");
      setBday("");
      setBreed("");
      setSex("");
      setVetsInfo("");
    }
    navigate("/");
  };

  return (
    <section className="addpet-section">
      <h2>Add your pets profile</h2>
      <form className="addPetForm">
        <label htmlFor="petname">Name:</label>
        <input
          type="text"
          id="petname"
          name="petname"
          value={petname}
          onChange={onPetnameChanged}
        />
        <label htmlFor="bday">Birthday:</label>
        <input
          type="date"
          min="1970-01-01"
          max={new Date().toISOString().substring(0, 10)}
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
          <option value="">Choose A Breed</option>
          {breedlist}
        </select>

        <label>Vets Information</label>
        <label htmlFor="vetsName">Vets Name:</label>
        <input
          type="text"
          id="vetsName"
          name="vetsName"
          value={vetsInfo.vetsName}
          onChange={onVetsNameChanged}
        />
        <label htmlFor="vetsPhone">Vets Phone Number:</label>
        <input
          type="tel"
          id="vetsPhone"
          name="vetsPhone"
          value={vetsInfo.vetsPhone}
          onChange={onVetsPhoneChanged}
        />
        <label htmlFor="vetsEmail">Vets Email:</label>
        <input
          type="email"
          id="vetsEmail"
          name="vetsEmail"
          value={vetsInfo.vetsEmail}
          onChange={onVetsEmailChanged}
        />

        <label htmlFor="vetsUrl">Vets Website Url:</label>
        <input
          type="url"
          id="vetsUrl"
          name="vetsUrl"
          placeholder="https://example.com"
          pattern="https://.*"
          value={vetsInfo.vetsAddress}
          onChange={onVetsUrlChanged}
        />

        <button type="button" onClick={onSavePetProfileClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};
