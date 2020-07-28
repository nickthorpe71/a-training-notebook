import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Context from '../../MainContext';
import Calendar from './Calendar/Calendar';
import DayPreview from './DayPreview/DayPreview';
import './MainView.css';

export default function MainView(props) {

  const context = useContext(Context);

  let workoutList = [];

  context.matchingWorkouts.forEach(workout => {
    workoutList.push(

    )
  });

  return (
    <div className="main-content">
      <section className="calendar">
        <Calendar fullDate={context.selectedDate} onDayClick={context.handleDayClick} />
      </section>
      <DayPreview />
    </div>
  );
}

