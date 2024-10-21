import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skils from './components/Skils'; 
import Projects from './components/Projects';
import About from './components/About';
import Service from './components/Service';
import Information from './components/Input/Information';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <div>
            <Home />
            <About />
            <Skils />
            <Projects />
            <Service />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path='/add-info' element={<Information />} />
      </Routes>
    </>
  );
}

export default App;