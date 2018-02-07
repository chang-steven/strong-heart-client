import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';

export class LineWrapper extends React.Component {
  render() {

    if (!this.props.exerciseLog) {
      return null;
    }

    const exerciseLogArray = this.props.exerciseLog.slice();
    exerciseLogArray.reverse();
    const dateArray = exerciseLogArray.map(x => x.date.slice(5));
    const minutesArray = exerciseLogArray.map(x => x.duration);

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
    }

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      plugins: {
        deferred: {
          enabled: true,
          xOffset: 150,
          yOffset: '50%',
          delay: 500
        }
      }
    };

    return (
      <div>
        <h2>Exercise by Date</h2>
        <Line
          data={data}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exerciseLog: state.user.exerciseLog
});

export default connect(mapStateToProps)(LineWrapper);
