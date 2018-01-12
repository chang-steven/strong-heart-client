import React from 'react';
import './badges.css';
import Card from '../card';

export function Badges(props) {
  return (
    <div className="badge-collection">
      <h2>Badges</h2>
      <section className="recent-badge">
        <Card />
      </section>
      <section className="badges">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default Badges;
