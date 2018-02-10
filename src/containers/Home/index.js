import React from 'react';
import ReactCarousel from '../../components/carousel';
import dashboard from './dashboard.jpeg';
import './home.css';

export default function Home(props) {

  return (
    <div className="home" id="about">
      <ReactCarousel />
      <section id='how-it-works'>
        <h2 className="section-title">How It Works</h2>
        <div>
          <img src='http://via.placeholder.com/400x200' alt='placeholder'/>
        </div>
      </section>
      <section id='analysis'>
        <h2 className="section-title">Analysis</h2>
        <div>
          <img src={dashboard} alt='dashboard'/>
        </div>
      </section>
    </div>
  );
}
