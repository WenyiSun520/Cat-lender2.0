import React from "react";
import { Routes, Route} from "react-router-dom";
import { Navbar } from "./app/Navbar";
import { PetProfileList } from "./features/petProfile/PetProfileList";
import Calender from './features/petEvents/Calender';
import {AddEventForm } from './features/petEvents/addEventForm'
import ErrorPage from './app/errPage'

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<PetProfileList />}></Route>
        <Route path="/calender" element={<Calender />}></Route>
        <Route path="/addEventForm" element={<AddEventForm />}></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
