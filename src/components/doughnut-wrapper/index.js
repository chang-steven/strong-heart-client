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
];


export function DoughnutWrapper(props) {
    console.log(props);
    const colorCodeArray = colorArray.map((color) => color.colorCode);
    const activitiesArray = [];
    const countArray = [];
    props.activitiesCount.map((activity) => {
      activitiesArray.push(activity.activity);
      countArray.push(activity.count);
    });
    const data = {
      labels: activitiesArray,
      datasets: [{
        data: countArray,
        backgroundColor: colorCodeArray,
        hoverBackgroundColor: colorCodeArray
      }]
    };

    return (
        <div>
          <h2>Activity Types</h2>
          <Doughnut data={data} />
        </div>
    )
}

const mapStateToProps = state => ({
  activitiesCount: state.exercise.exerciseStatistics.activitiesArray
})

export default connect(mapStateToProps)(DoughnutWrapper)
