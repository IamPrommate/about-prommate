import React from 'react';
import './css/App.css';
import Homepage from './Homepage';
import NavBar from './NavBar';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutMe" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
