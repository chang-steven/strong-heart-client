import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css';

export default function NavBar(props) {
const links = props.links.map((link, index) =>
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
