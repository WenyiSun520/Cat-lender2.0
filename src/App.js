import React from "react";
// import { Counter } from "./features/counter/Counter";
import {Navbar} from "./app/Navbar"
import { PetProfileList } from "./features/petProfile/PetProfileList";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <PetProfileList />
    </div>
  );
}

export default App;
