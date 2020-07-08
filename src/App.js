import React, { Component } from 'react';
import Calendar from './components/Calendar/Calendar.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calendar">
          <Calendar />
        </div>
      </div>
    );
  }
}
