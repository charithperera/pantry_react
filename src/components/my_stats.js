import React, { Component } from 'react';
import './my_stats.css';


const MyStats = (props) => {
  const myStats = props.stats

  return (
    <div className="daily-stats">
      <h2>My Stats</h2>
      <div className="row">
        <div className="col-xs-3">
          <h1>{Math.abs(myStats.calories.toFixed(0))}</h1>
        </div>
        <div className="col-xs-3">
          <h1>{Math.abs(myStats.fat.toFixed(0))}</h1>
        </div>
        <div className="col-xs-3">
          <h1>{Math.abs(myStats.carbs.toFixed(0))}</h1>
        </div>
        <div className="col-xs-3">
          <h1>{Math.abs(myStats.protein.toFixed(0))}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-3">
          <h3>Calories</h3>
        </div>
        <div className="col-xs-3">
          <h3>Fat</h3>
        </div>
        <div className="col-xs-3">
          <h3>Carbs</h3>
        </div>
        <div className="col-xs-3">
          <h3>Protein</h3>
        </div>
      </div>
    </div>
  )
}

export default MyStats;
