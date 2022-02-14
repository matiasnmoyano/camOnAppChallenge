import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AllVideos from './components/AllVideos';
import Home from './components/Home'
import VideoDetail from './components/VideoDetail';
import Favorites from './components/Favorites'
function App() {
  function onClick(files){
    console.log(files)
  }
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/videoDetail/:id' element={<VideoDetail/>}/>
        <Route exact path='/favorites' element={<Favorites/>}/>
        <Route exact path='/myVideos' element={<AllVideos/>}/>
    </Routes>

  );
}

export default App;
