// src/components/Dashboard.js

import React from 'react';

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Steps: {data.steps}</p>
      <p>Calories: {data.calories}</p>
      <h3>Workouts</h3>
      <ul>
        {data.workouts.map((workout, index) => (
          <li key={index}>{workout}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
