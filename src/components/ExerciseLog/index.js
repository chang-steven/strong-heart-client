import React from 'react';
import { connect } from 'react-redux';

import './exercise-log.css';

function ExerciseLog(props) {
  const exerciseLog  = props.exerciseLog.map((exercise, index) =>
    <div className="exercise card" key={index}>
        <p>{exercise.date}</p>
        <h3>{exercise.type}</h3>
        <h3>{exercise.duration}</h3>
    </div>
  );

  return (
    <div className="exercise-log">
      <h2>Exercise Log</h2>
      <section className="exercises">
        {exerciseLog}
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  exerciseLog: state.heartStrong.exerciseLog
})

export default connect(mapStateToProps)(ExerciseLog);
