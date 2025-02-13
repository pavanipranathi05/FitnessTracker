// src/App.js

import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Tracker from './components/Tracker';

const App = () => {
  const [data, setData] = useState({
    steps: 0,
    calories: 0,
    workouts: [],
  });

  const updateData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <div className="App">
      <Header title="FitFlex: Your Personal Fitness Companion" />
      <Dashboard data={data} />
      <Tracker updateData={updateData} />
    </div>
  );
};

export default App;
