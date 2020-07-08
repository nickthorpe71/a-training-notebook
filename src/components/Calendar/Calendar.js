import React, { Component } from 'react';
import Month from '../Month/Month.js';
import './Calendar.css'

export default class Calendar extends Component {
  render() {
    return (
      <div className="calendar-container">
        <h2 className="calendar-container-title"> Month </h2>
        <div className="SomeMonth">
          <Month />
        </div>
      </div>
    );
  }
}