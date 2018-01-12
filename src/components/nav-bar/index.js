import React from 'react';
import './nav-bar.css';

export function NavBar(props) {
  return (
    <nav className="App-nav">
      <ul>
        <li className="nav-left">about</li>
        <li className="nav-left">exercise log</li>
        <li className="nav-left">analysis</li>
        <li className="nav-right">login</li>
      </ul>
    </nav>
  );
}

export default NavBar;
