import React from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../../actions';

import LineWrapper from '../line-wrapper';
import DoughnutWrapper from '../doughnut-wrapper';
import './dashboard.css';

export class Dashboard extends React.Component {

  render() {
    if (!this.props.exerciseStatistics) {
      return null;
    }

    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
          <section>
            <DoughnutWrapper
            />
          </section>
          <section>
            <h2>Statistics</h2>
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
  exerciseStatistics: state.user.exerciseStatistics

});

export default connect(mapStateToProps, { fetchUserInfo })(Dashboard);
