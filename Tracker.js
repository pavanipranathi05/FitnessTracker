// src/components/Tracker.js

import React, { useState } from 'react';

const Tracker = ({ updateData }) => {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [workout, setWorkout] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData({
      steps: steps,
      calories: calories,
      workouts: workout ? [workout] : [],
    });
    setSteps(0);
    setCalories(0);
    setWorkout('');
  };

  return (
    <div className="tracker">
      <h2>Track Your Activity</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Steps:
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(Number(e.target.value))}
          />
        </label>
        <label>
          Calories:
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(Number(e.target.value))}
          />
        </label>
        <label>
          Workout:
          <input
            type="text"
            value={workout}
            onChange={(e) => setWorkout(e.target.value)}
          />
        </label>
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default Tracker;
