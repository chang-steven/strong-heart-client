import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

import { userLogOut } from '../../actions';
import logo from './logo.png';
import './nav-bar.css';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navIsOpen: false,
      showNavLogo: false,
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  handleScroll() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 124) {
       this.setState({
         showNavLogo: true,
       })
     }

     else {
       this.setState({
         showNavLogo: false,
       })
     }
   }

  toggleNavMenu() {
    if (this.state.navIsOpen) {
      this.setState({
        navIsOpen: false
      })
    }

    else {
      this.setState({
        navIsOpen: true
      })
    }
  }

  render () {
    return (
      <nav className="App-nav nav">
          {
            this.props.loggedIn ?
            <div className="nav-menu">

              <div className='small-header'>
                  <Link to="/">
                    <div id="small-logo">
                      <img src={logo} alt='logo' />
                    </div>
                  </Link>
                <h2 className="small-header-title"><Link to="/">HEART<strong>STRONG</strong></Link></h2>
              </div>

              <span
                id="hamburger"
                onClick={()=> this.toggleNavMenu()}>
                <i className="fas fa-bars"></i>
              </span>
              <ul className={this.state.navIsOpen ? 'isOpen' : 'isClosed'}>
                <div id="logo" className={this.state.showNavLogo ? 'show' : 'no-show'}>
                  <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                <li className="nav-links hvr-underline-from-center hvr-grow">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-links hvr-underline-from-center hvr-grow">
                  <Link to="/exercise-log">Exercise Log</Link>
                </li>
                <li
                  className="nav-links hvr-underline-from-center hvr-grow"
                  onClick={()=>this.props.openModal('add-exercise')}>Add Exercise
                </li>
                <li
                  className="nav-links hvr-underline-from-center hvr-grow"
                  onClick={()=> this.props.userLogOut()}>Log Out
                </li>
              </ul>
            </div>

            :
            <div className="nav-menu">
              <div className='small-header'>
                    <Link to="/">
                      <div id="small-logo">
                        <img src={logo} alt='logo' />
                      </div>
                    </Link>
                <h2 className="small-header-title"><Link to="/">HEART<strong>STRONG</strong></Link></h2>
              </div>

                <span
                  id="hamburger"
                  onClick={()=> this.toggleNavMenu()}>
                  <i className="fas fa-bars"></i>
                </span>
              <ul className={this.state.navIsOpen ? 'isOpen' : 'isClosed'}>
                <div id="logo" className={this.state.showNavLogo ? 'show' : 'no-show'}>
                  <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                <li className="nav-links hvr-underline-from-center hvr-grow">
                  <Scrollchor animate={{offset: -35, duration: 600}} to="why">Why?</Scrollchor>
                </li>
                <li className="nav-links hvr-underline-from-center hvr-grow">
                  <Scrollchor animate={{offset: -35, duration: 600}} to="how-it-works">How It Works</Scrollchor>
                </li>
                <li className="nav-links hvr-underline-from-center hvr-grow">
                  <Scrollchor animate={{offset: -35, duration: 600}} to="analysis">Analysis</Scrollchor>
                </li>
                <li className="nav-links hvr-underline-from-center hvr-grow" onClick={()=>this.props.openModal('signup')}>
                  Sign Up
                </li>
                <li className="nav-links hvr-underline-from-center hvr-grow" onClick={()=>this.props.openModal('login')}>
                  Login/Demo
                </li>
              </ul>
            </div>
          }
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
})

export default connect(mapStateToProps, { userLogOut })(NavBar);
