import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./app/Navbar";
import { PetProfileList } from "./features/petProfile/PetProfileList";
import Calender from "./features/petEvents/Calender";
import { AddEventForm } from "./features/petEvents/addEventForm";
import {EditEventForm} from './features/petEvents/EditEventForm'
import { AddPetForm } from "./features/petProfile/AddPetForm";
import { EditPetForm } from "./features/petProfile/EditPetForm";

import { SingleProfile } from "./features/petProfile/SingleProfilePage";
import ErrorPage from "./app/errPage";

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<PetProfileList />}></Route>
        <Route
          exact
          path="/profiles/:profileId"
          element={<SingleProfile />}
        ></Route>
        <Route path="/calender" element={<Calender />}></Route>
        <Route path="/addEventForm" element={<AddEventForm />}></Route>
        <Route
          path="/editPetForm/:eventId"
          element={<EditEventForm />}
        ></Route>

        <Route path="/addPetForm" element={<AddPetForm />}></Route>
        <Route path="/editPetForm/:profileId" element={<EditPetForm />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
