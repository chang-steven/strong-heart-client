import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

import './nav-bar.css';

export function NavBar(props) {
  return (
    <nav className="App-nav">
        {
          props.loggedIn ?
          <ul>
            <li className="nav-links">
              <Link to='/dashboard'>
                Dashboard
              </Link>
            </li>
            <li className="nav-links">
              <Link to='/exercise-log'>
                Exercise Log
              </Link>
            </li>
            <li className="nav-links">
              <Link to='/add-exercise'>
                Add Exercise
              </Link>
            </li>
            <li className="nav-links">
              <Link to='/badges'>
                Badges
              </Link>
            </li>
          </ul>
          :
          <ul>
            <li className="nav-links">
              <Scrollchor to='about'>
                About
              </Scrollchor>
            </li>
            <li className="nav-links">
              <Scrollchor to='how-it-works'>
                How It Works
              </Scrollchor>
            </li>
            <li className="nav-links">
              <Scrollchor to='analysis'>
                Analysis
              </Scrollchor>
            </li>
            <li className="nav-links" onClick={()=>props.openModal('login')}>
              Login
            </li>
          </ul>
        }
    </nav>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
})

export default connect(mapStateToProps)(NavBar);
