import React from 'react';
import SectionContainer from '../section-container'
import './dashboard.css';

export default function Dashboard(props) {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <SectionContainer title="Pie Chart" content="http://www.conceptdraw.com/How-To-Guide/picture/Percentage-pie-chart-DA-determinations.png"/>
      <SectionContainer title="Statistics" content="http://via.placeholder.com/400x200"/>
      <SectionContainer title="Line Chart" content="https://canvasjs.com/wp-content/uploads/images/gallery/php-charts/dynamic/php-dynamic-live-line-charts-graphs.png"/>
    </div>
  );
}
