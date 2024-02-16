import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/navigationtop/Navigation';
import Home from './container/pages/home/Home';
import About from './container/pages/about/About';


function App() {
  return (
    <div class="container">
      <Navbar />  
  
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
