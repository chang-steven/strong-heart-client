import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './responsive-nav.css';


export class ResponsiveNav extends React.Component {

  burgerToggle() {
    console.log('just clicked');
    let linksEl = document.querySelector('.narrowLinks');
    console.log(linksEl);
    // if (linksEl.style.display === 'block') {
    //           linksEl.style.display = 'none';
    //       }
    // else {
    //     linksEl.style.display = 'block';
    // }
  }

  // handleClick() {
  //   console.log('Handled Click');
  // }

  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div className="navNarrow">
          <i className="fas fa-bars" onClick={this.burgerToggle()}></i>
            <div className="narrowLinks">
              <a href="#" onClick={this.burgerToggle()}>Link 1</a>
              <a href="#" onClick={this.burgerToggle()}>Link 2</a>
              <a href="#" onClick={this.burgerToggle()}>Link 3</a>
            </div>
        </div>




            {/* <ul>
              <li className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-links">
                <Link to="/exercise-log">Exercise Log</Link>
              </li>
              <li
                className="nav-links"
                onClick={()=>props.openModal('add-exercise')}>Add Exercise
              </li>
              <li
                className="nav-links"
                onClick={()=> props.userLogOut()}>Log Out
              </li>
            </ul> */}


        </nav>
      )
  }
}

export default ResponsiveNav;
