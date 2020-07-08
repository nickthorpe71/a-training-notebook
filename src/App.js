import React, { Component } from 'react';
import Calendar from './components/Calendar/Calendar.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDate: new Date(),
    }
  }

  render() {
    const { selectedDate } = this.state;
    return (
      <div className="App">
        <div className="calendar">
          <Calendar fullDate={selectedDate} onDayClick={this.handleDayClick} />
        </div>
      </div>
    );
  }

  handleDayClick(newDay) {
    const { selectedDate } = this.state;
    console.log(newDay);

    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(), //this will need to change to desired month if we want to allow month navigation
        newDay
      )
    });
  }
}
