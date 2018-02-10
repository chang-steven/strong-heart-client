import React from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../../actions';

import LineWrapper from '../../components/line-wrapper';
import DoughnutWrapper from '../../components/doughnut-wrapper';
import './dashboard.css';

export class Dashboard extends React.Component {

  render() {
    if (!this.props.exerciseStatistics) {
      return null;
    }

    else if (this.props.exerciseStatistics.totalExerciseSessions === 0) {
      return (
        <div className='no-data'><h3>Welcome!  Your dashboard looks empty, do some exercise!</h3></div>
      )
    }

    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
          <div className="doughnut charts">
            <DoughnutWrapper />
          </div>
          <div className="statistics">
            <h2>Statistics</h2>
            <span>{this.props.exerciseStatistics.averageMinutesPerSession}</span>
            <h4>Average Minutes of Exercise</h4>
            <span>{this.props.exerciseStatistics.totalExerciseSessions}</span>
            <h4>Total Exercise Sessions</h4>
            <span>{this.props.exerciseStatistics.totalExerciseMinutes}</span>
            <h4>Total Minutes Logged</h4>
          </div>
          <div className="line charts">
            <LineWrapper />
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exerciseStatistics: state.user.exerciseStatistics

});

export default connect(mapStateToProps, { fetchUserInfo })(Dashboard);
