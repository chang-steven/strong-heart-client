import React from 'react';
import {Line} from 'react-chartjs-2';
import { connect } from 'react-redux';

export class LineWrapper extends React.Component {
    render() {

    const exerciseLogArray = this.props.exerciseLog.reverse();
    const dateArray = [];
    const minutesArray = [];

    exerciseLogArray.map((log) => {
      dateArray.push((log.date).slice(5));
      return minutesArray.push(log.duration);
    });
    console.log(dateArray, minutesArray);

    const data = {
      labels: dateArray,
      datasets: [
        {
          label: 'Minutes of Exercise',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: minutesArray
        }
      ],
      options: {
        scales: {
          yAxes: [{
            ticks: {
                beginAtZero: true,
              }
            }]
          }
        },
      };

    return (
      <div>
        <h2>Exercise by Date</h2>
        <Line data={data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exerciseLog: state.exercise.exerciseLog
});

export default connect(mapStateToProps)(LineWrapper);
