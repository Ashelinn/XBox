import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer';

//роутинг
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home.js';
import Consoles from './Pages/Consoles.js';
import Games from './Pages/Games.js';
import Community from './Pages/Community.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/games" exact element={<Games/>} />
        <Route path="/consoles" exact element={<Consoles/>} />
        <Route path="/community" exact element={<Community/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>          
  );
}

export default App;
