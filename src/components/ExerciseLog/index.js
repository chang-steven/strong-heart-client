import React from 'react';
import { connect } from 'react-redux';
import { fetchExerciseLog } from '../../actions';

import './exercise-log.css';

export class ExerciseLog extends React.Component {

  componentDidMount() {
    this.props.fetchExerciseLog();
  }

  render() {
    const exerciseLog  = this.props.exerciseLog.map((exercise, index) =>
      <div className="exercise card" key={index}>
          <p>{exercise.date}</p>
          <h3>{exercise.type}</h3>
          <h3>{exercise.duration}m</h3>
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
}

const mapStateToProps = state => ({
  exerciseLog: state.heartStrong.exerciseLog
})

export default connect(mapStateToProps, {fetchExerciseLog})(ExerciseLog);
