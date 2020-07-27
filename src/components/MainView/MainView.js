import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Context from '../../Context';
import Calendar from './Calendar/Calendar';
import './MainView.css';

export default function MainView(props) {

  const context = useContext(Context);

  return (
    <div className="main-content">
      <section className="calendar">
        <Calendar fullDate={context.selectedDate} onDayClick={context.handleDayClick} />
      </section>
      <section className="note-preview">
        <div className="note-preview-title">
          <h3>Thu 3/21</h3>
        </div>
        <ul className="workout-preview-list">
          <li>
            <div className="workout-preview-title-container">
              <h3 className="workout-preview-title">Workout Title</h3>
              <p className="workout-preview-time">9:32AM</p>
            </div>
            <p className="workout-preview-description">
              Deadlift, lat raises, abs, leg press, dumbbell bench, cable row, cable push down
            </p>
          </li>
        </ul>
        <div className="add-button">
          <Link to='/workout/new'>
            <button>+</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

