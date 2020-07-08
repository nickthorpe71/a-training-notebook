import React from 'react';
import Weekday from '../Weekday/Weekday'
import './Month.css'

export default function Month() {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const weekdaysMarkup = weekdays.map(weekday => {
    return (
      <Weekday
        key={weekday}
        title={weekdayAbbreviation(weekday)}
        label={weekday}
      />
    )
  });

  const weeks = getWeeksForMonth(6, 2020);

  const weeksMarkup = weeks.map((week, index) => {
    return (
      <div role="row" className="week" key={index}>
        {'render week here'}
      </div>
    )
  });

  return (
    <div>
      <div className="weekday-container">
        {weekdaysMarkup}
      </div>
      {weeksMarkup}
    </div>
  );

  //returns only the first three letters of the weekday title
  function weekdayAbbreviation(weekday) {
    return weekday.substring(0, 2);
  }

  function getWeeksForMonth(month, year) {
    const WEEK_LENGTH = 7;

    const firstOfMonth = new Date(year, month);
    const firstDayOfWeek = firstOfMonth.getDay();
    const weeks = [[]];

    let currentWeek = weeks[0];
    let currentDate = firstOfMonth;

    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }

    while (currentDate.getMonth() === month) {
      if (currentWeek.length === WEEK_LENGTH) {
        currentWeek = [];
        weeks.push(currentWeek);
      }

      currentWeek.push(currentDate);
      currentDate = new Date(year, month, currentDate.getDate() + 1);

    }

    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }

    console.log(weeks);
    return weeks;

  }

}


