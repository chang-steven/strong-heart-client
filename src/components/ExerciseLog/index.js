import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchExerciseLog } from '../../actions';
import './exerciselog.css';

import './exercise-log.css';

export class ExerciseLog extends React.Component {

  componentDidMount() {
    this.props.fetchExerciseLog();
  }

  render() {
    const exerciseLog  = this.props.exerciseLog.map((exercise, index) => {
      const [yr, mo, day] = exercise.date.split('-');
      const modDate = `${mo}-${day}-${yr.slice(2,4)}`
      return (
        <div className="exercise card" key={index}>
        <div className="exercise-menu">
          <span><Link to={`/edit-exercise/${exercise._id}`}>edit</Link></span>
          <br />
          <span><Link to={`/delete/${exercise._id}`}>delete</Link></span>
        </div>
          <p>{modDate}</p>
          <h3>{exercise.activity}</h3>
          <h3>{exercise.duration}m</h3>
        </div>
      )}
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
  exerciseLog: state.exercise.exerciseLog
})

export default connect(mapStateToProps, {fetchExerciseLog})(ExerciseLog);
