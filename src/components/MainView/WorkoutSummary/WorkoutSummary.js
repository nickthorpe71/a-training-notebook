import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Context from '../../../MainContext';

export default function MainView(props) {

  const context = useContext(Context);
  const workout = context.matchingWorkouts[props.workoutNum];

  function exerciseList() {
    let exercises = [];

    for (let i = 1; i <= workout.numExercises; i++) {
      exercises.push(workout[`exercise${i}`]);
    }
  }

  return (
    <li>
      <div className="workout-preview-title-container">
        <Link to={`/workout/${workout.workoutId}`}>
          <h3 className="workout-preview-title">{workout.workoutTitle}</h3>
        </Link>
        <p className="workout-preview-time">{workout.workoutTime}</p>
      </div>
      <p className="workout-preview-description">
        <ul>
          {exerciseList()}
        </ul>
      </p>
    </li>
  );
}

