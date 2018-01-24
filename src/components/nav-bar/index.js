import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './nav-bar.css';

export function NavBar(props) {
  let currentLinks;

  const defaultNavLinks = [
    {title: 'about', link: '/#about'},
    {title: 'how it works', link: '/#how-it-works'},
    {title: 'analysis', link: '/#analysis'},
    {title: 'login', link: '/login'}
  ];

  const loggedInNavLinks = [
      {title: 'dashboard', link: '/dashboard'},
      {title: 'about', link: '/about'},
      {title: 'how it works', link: '/how-it-works'},
      {title: 'analysis', link: '/analysis'}
    ];

  const dashboardNavLinks = [
      {title: 'dashboard', link: '/dashboard'},
      {title: 'exercise log', link: '/exercise-log'},
      {title: 'add exercise', link: '/add-exercise'},
      {title: 'badges', link: '/badges'}
    ];

  if (props.loggedIn && props.home) {
    currentLinks = loggedInNavLinks;
  }

  else if (props.loggedIn && !props.home) {
    currentLinks = dashboardNavLinks;
  }

  else {
    currentLinks = defaultNavLinks;
  }

const links = currentLinks.map((link, index) =>
<li className="nav-links" key={index}>
  <Link to={link.link}>
    {link.title}
  </Link>
</li>
);

  return (
    <nav className="App-nav">
      <ul>
        {links}
      </ul>
    </nav>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
})

export default connect(mapStateToProps)(NavBar);
