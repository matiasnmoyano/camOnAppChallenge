import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home'
function App() {
  function onClick(files){
    console.log(files)
  }
  return (
    <Routes>
        <Route exact path='/home' element={<Home/>}/>
    </Routes>
   /*  <div className="App">
        <input type='file' name="files" onChange={(e) => onClick(e.target.files)}></input>
        <button>Insertar</button>
    </div> */
  );
}

export default App;
