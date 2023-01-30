import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./app/Navbar";
import { PetProfileList } from "./features/petProfile/PetProfileList";
import { SingleProfile } from "./features/petProfile/SingleProfilePage";
import Calender from "./features/petEvents/Calender";
import { AddEventForm } from "./features/petEvents/addEventForm";
import { EditEventForm } from "./features/petEvents/EditEventForm";
import { AddPetForm } from "./features/petProfile/AddPetForm";
import { EditPetForm } from "./features/petProfile/EditPetForm";
import { PetRecordList } from "./features/petRecords/petRecordList";

import ErrorPage from "./app/errPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PetProfileList />}></Route>
        <Route
          exact
          path="/profiles/:profileId"
          element={<SingleProfile />}
        ></Route>
        <Route path="/addPetForm" element={<AddPetForm />}></Route>
        <Route path="/editPetForm/:profileId" element={<EditPetForm />}></Route>

        <Route path="/calender" element={<Calender />}></Route>
        <Route path="/addEventForm" element={<AddEventForm />}></Route>
        <Route
          path="/editEventForm/:eventId"
          element={<EditEventForm />}
        ></Route>

        <Route path="/records" element={<PetRecordList />}></Route>

        {/* handle error routes */}
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/editPetForm/*" element={<ErrorPage />}></Route>
        <Route path="/editEventForm/*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
