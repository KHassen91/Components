import React from 'react'
import './App.css';
import Photo from "./Component/Profile/ProfilPhoto"
import FullName from "./Component/Profile/FullName"
import Adress from "./Component/Profile/Adress"

function App() {
  return (
    <div className="App">
      <div className="photo">
        <Photo />
      </div>
      <div className="name">
        <FullName />
      </div>
      <div className="adress">
        <Adress />
      </div>
    </div>
  );
}

export default App;
