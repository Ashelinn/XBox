import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';

//роутинг
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home.js';
import Consoles from './Pages/Consoles.js';
import Games from './Pages/Games.js';
import Community from './Pages/Community.js';


function App() {
  return (
   
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/consoles" element={<Consoles />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>     
   
  );
}

export default App;
