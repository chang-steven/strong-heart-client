import React from 'react';
import {Link} from 'react-router-dom'

import './header.css';
import logo from './images/logo.png';

function Header(props) {
  return (
    <header className="App-header">
      <div className='header-logo'>
        <Link to="/"><img src={logo} alt='logo' /></Link>
      </div>
      <h1 className="App-title">
        <Link to="/">HEART<strong>STRONG</strong></Link>
      </h1>
    </header>
  );
}

export default Header;
