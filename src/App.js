import React from 'react';
import './App.css'; // Assume you have your CSS in an App.css file

function DietPlan() {
  return (
    <div className="container">
      <div className="header">
        Diet Plan
      </div>
      <div className="main">
        <div className="sidebar">
          <ul>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Snacks</li>
          </ul>
        </div>
        <div className="content">
          <div className="meal">
            <h2>Breakfast</h2>
            <ul>
              <li>Oatmeal</li>
              <li>Eggs</li>
              <li>Salad</li>
            </ul>
            <div className="nutrition-info">
              <p>Calories: 300</p>
              <p>Protein: 20g</p>
              <p>Fat: 10g</p>
              <p>Carbs: 40g</p>
            </div>
          </div>
          {/* Repeat similar structure for other meals */}
        </div>
      </div>
    </div>
  );
}

export default DietPlan;
