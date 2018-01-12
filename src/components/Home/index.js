import React from 'react';
import SectionContainer from '../section-container'
import './home.css';

export function Home(props) {
  return (
    <div className="home">
      <h2>Home</h2>
      <SectionContainer />
      <SectionContainer />
      <SectionContainer />
    </div>
  );
}

export default Home;
