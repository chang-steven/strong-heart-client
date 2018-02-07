import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'
import logo from './logo.png';

function Header(props) {
  return (
    <header className="App-header">
      <div className='header-logo'><Link to="/"><img src={logo} alt='logo' /></Link></div>
      <h1 className="App-title"><Link to="/">Heart Strong</Link></h1>
    </header>
  );
}

export default Header;
