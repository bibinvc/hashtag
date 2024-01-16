// Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">Hashtag</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
