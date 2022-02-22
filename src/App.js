import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer';

//роутинг
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Consoles from './Pages/Consoles';
import Games from './Pages/Games';
import Community from './Pages/Community';
import Details from './Pages/Details';
import Acsessorise from './Pages/Acsessorise';
import Register from './Pages/Register';
import Login from './Pages/Login';

import data from './bdgames.json';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/XBox" exact element={<Home/>} />
        <Route path="/pcgames" exact element={<Games games = {data.games} title = 'PC Games' />} />
        <Route path="/consolegames" exact element={<Games games = {data.consolegames} title = 'Console Games' />} />
        <Route path="/consoles" exact element={<Consoles/>} />
        <Route path="/community" exact element={<Community/>} />
        <Route path="/details" exact element={<Details/>} />
        <Route path="/accessories" exact element={<Acsessorise/>} />
        <Route path="/auth" exact element={<Register/>} />
        <Route path="/login" exact element={<Login/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>          
  );
}

export default App;
