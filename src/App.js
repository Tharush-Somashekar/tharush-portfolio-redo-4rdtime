import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Homescreen/Index.jsx';
import Navbar from './Pages/Home/Navbar.jsx';
import MySkills from './Pages/Home/Skills.jsx';
import AboutMe from './Pages/Home/Aboutme.jsx';
import MyPortfolio from './Pages/Home/Myportfolio.jsx';
import ContactMe from './Pages/Home/Contactme.jsx';
import Footer from './Pages/Home/Footer.jsx'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <AboutMe/>
    </div>
  );
}

export default App;
