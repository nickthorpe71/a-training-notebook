import React, { useContext } from 'react';
import Context from '../../Context';
import Calendar from './Calendar/Calendar';
import './MainView.css';

export default function MainView(props) {

  const context = useContext(Context);

  return (
    <div className="MainView">
      <div className="calendar">
        <Calendar fullDate={context.selectedDate} onDayClick={context.handleDayClick} />
      </div>
    </div>
  );
}

