import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'

function Header(props) {
  return (
    <header className="App-header">
      <h1 className="App-title"><Link to="/">Heart Strong</Link></h1>
    </header>
  );
}

export default Header;
