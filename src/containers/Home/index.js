import React from 'react';
import ReactCarousel from '../../components/carousel';
import statistics from './statistics.jpeg';
import exercise from './exercise-graph.jpeg';
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
          <img src={statistics} alt='statistics'/>
        </div>
        <div>
          <img src={exercise} alt='exercise'/>
        </div>
      </section>
    </div>
  );
}
