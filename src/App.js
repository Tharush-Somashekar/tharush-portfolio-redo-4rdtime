import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Homescreen/Index.jsx';
import Navbar from './Pages/Home/Navbar.jsx';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
    </div>
  );
}

export default App;
