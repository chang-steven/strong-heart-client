import React from 'react';
import { connect } from 'react-redux';
import { fetchExerciseLog } from '../../actions';

import LineWrapper from '../line-wrapper';
import DoughnutWrapper from '../doughnut-wrapper';
import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchExerciseLog();
  }

  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
          <section>
            <DoughnutWrapper
               // activitiesCount={this.props.exerciseStatistics.activitiesArray}
            />
          </section>
          <section>
            <h2>Statistics</h2>
            {/* <span>{this.props.exerciseStatistics.totalExerciseSessions}</span>
            <h4>Exercise Sessions this month</h4> */}
            <span>{this.props.exerciseStatistics.averageMinutesPerSession}</span>
            <h4>Average Minutes of Exercise</h4>
            <span>{this.props.exerciseStatistics.totalExerciseSessions}</span>
            <h4>Total Exercise Sessions</h4>
            <span>{this.props.exerciseStatistics.totalExerciseMinutes}</span>
            <h4>Total Minutes Logged</h4>
          </section>
          <section>
            <LineWrapper />
          </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exerciseStatistics: state.exercise.exerciseStatistics
});

export default connect(mapStateToProps, {fetchExerciseLog})(Dashboard);
