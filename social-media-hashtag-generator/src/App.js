// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HashtagGenerator from './HashtagGenerator';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HashtagGenerator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
