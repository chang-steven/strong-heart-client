import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css';

export function NavBar(props) {
  return (
    <nav className="App-nav">
      <ul>
        <li className="nav-left">about</li>
        <li className="nav-left">how it works</li>
        <li className="nav-left">analysis</li>
        <li className="nav-right"><Link to="/login">login</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
