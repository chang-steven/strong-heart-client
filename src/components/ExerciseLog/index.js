import React from 'react';
import './exercise-log.css';
import Card from '../card';


export function ExerciseLog(props) {
  return (
    <div className="exercise-log">
      <h2>Exercise Log</h2>
      <section className="exercises">
        <Card />
        <Card />
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

export default ExerciseLog;
