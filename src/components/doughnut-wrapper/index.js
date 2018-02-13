import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

const colorArray = [
  {
    label: 'Red',
    colorCode: '#FF6384'
  },
  {
    label: 'Yellow',
    colorCode: '#FFCE56'
  },
  {
    label: 'Green',
    colorCode: '#4FBFBF'
  },
  {
    label: 'Purple',
    colorCode: '#cc65fe'
  },
  {
    label: 'Orange',
    colorCode: '#FEA14B'
  },
  {
    label: 'Blue',
    colorCode: '#36a2eb'
  },
  {
    label: 'Red',
    colorCode: '#FF6384'
  },
  {
    label: 'Yellow',
    colorCode: '#FFCE56'
  },
  {
    label: 'Green',
    colorCode: '#4FBFBF'
  },
  {
    label: 'Purple',
    colorCode: '#cc65fe'
  },
  {
    label: 'Orange',
    colorCode: '#FEA14B'
  },
  {
    label: 'Blue',
    colorCode: '#36a2eb'
  },
];

export function DoughnutWrapper(props) {
    if (!props.activitiesArray) {
      return null;
    }

    const colorCodeArray = colorArray.map((color) => color.colorCode);
    const activitiesArray = props.activitiesArray.map(activity => activity.activity);
    const countArray = props.activitiesArray.map(activity => activity.count);
    const data = {
      labels: activitiesArray,
      datasets: [{
        data: countArray,
        backgroundColor: colorCodeArray,
        hoverBackgroundColor: colorCodeArray
      }]
    };

    return (
        <div className="doughnut-wrapper">
          <h2>Activity Types</h2>
          <Doughnut
            id="doughnutChart"
            className="donut"
            data={data}
           />
        </div>
    )
}

const mapStateToProps = state => ({
  activitiesArray: state.user.exerciseStatistics.activitiesArray
})

export default connect(mapStateToProps)(DoughnutWrapper)
