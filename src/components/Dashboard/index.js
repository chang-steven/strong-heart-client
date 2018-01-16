import React from 'react';
import SectionContainer from '../section-container'
import './dashboard.css';

export default function Dashboard(props) {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <SectionContainer title="Sec 1" content="http://via.placeholder.com/400x200"/>
      <SectionContainer title="Sec 2" content="http://via.placeholder.com/400x200"/>
      <SectionContainer title="Sec 3" content="http://via.placeholder.com/400x200"/>
    </div>
  );
}
