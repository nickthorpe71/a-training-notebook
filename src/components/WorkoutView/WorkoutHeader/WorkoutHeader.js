import React, { useContext } from 'react';
import Context from '../../../MainContext';
import './WorkoutHeader.css';

export default function WorkoutHeader(props) {

  const date = new Date();
  const context = useContext(Context);

  const currentDate = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + date.getDate().toString().padStart(2, 0);

  const currentTime = + date.getHours() + ":"
    + date.getMinutes() + ":"
    + date.getSeconds();

  return (
    <section className="workout-view-header">
      <label htmlFor="workoutTitle"></label>
      <input
        name="workoutTitle"
        type="text"
        className="workout-view-title"
        placeholder="Workout Title"
        onChange={props.onChange}
      />
      <div className="time-date-container">
        <label htmlFor="workoutTime"></label>
        <input
          name="workoutTime"
          type="time"
          className="workout-view-time-date"
          placeholder="time"
          onChange={props.onChange}
          value={currentTime} //need to adjust this to consider editing
        />
        <label htmlFor="workoutDate"></label>
        <input
          name="workoutDate"
          type="date"
          className="workout-view-time-date"
          placeholder="date"
          onChange={props.onChange}
          value={currentDate}
        />
      </div>
    </section>
  )
}