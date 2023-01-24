import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
// import Map from './pages/maps/Map.jsx';
import MapInfo from './pages/maps/MapInfo.jsx';
// import CreateMap from './pages/maps/script.jsx';
// import MyGoogleMap from './components/MyGoogleMap.js';
import Camera from "./pages/camera/Camera.jsx";
import Lobby from './pages/camera/lobby';
import Request from './pages/camera/requestpermission';
import Homelobby from './pages/home/home';
const App = () => {

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Homelobby/>}/>
          <Route path="/home" element={<Homelobby/>}/>
          {/* <Route path="/map" element={<MyGoogleMap/>}/> */}
          {/* <Route path="/map" element={<Map/>}/> */}
          <Route path="/map" element={<MapInfo/>}/>
          <Route path="/camera" element={<Lobby/>}/>
          <Route path="/request" element={<Request/>}/>
          <Route path="/opencamera" element={<Camera/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
