import React from 'react';
import SectionContainer from '../section-container'
import './dashboard.css';

export function Dashboard(props) {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <SectionContainer />
      <SectionContainer />
      <SectionContainer />
    </div>
  );
}

export default Dashboard;
