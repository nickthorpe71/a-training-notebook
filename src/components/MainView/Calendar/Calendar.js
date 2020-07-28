import React, { Component } from 'react';
import Context from '../../../MainContext';
import Month from '../Month/Month.js';
import './Calendar.css'

export default class Calendar extends Component {
  static contextType = Context;

  render() {
    const { selectedDate, onDayClick } = this.context;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"];

    const dateNumber = selectedDate.getDate();
    const monthNumber = selectedDate.getMonth();
    const yearNumber = selectedDate.getFullYear();
    const monthName = getMonthName(monthNumber);

    function getMonthName(index) {
      return months[index];
    }

    return (
      <div className="calendar-container">
        <h2 className="calendar-container-title"> {monthName} </h2>
        <div className="SomeMonth">
          <Month
            date={dateNumber}
            month={monthNumber}
            year={yearNumber}
            onDayClick={onDayClick} //this seems to be prop drilling so will likely need context
          />
        </div>
      </div>
    );
  }
}