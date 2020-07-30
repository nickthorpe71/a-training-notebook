import React from 'react';
import { Link } from 'react-router-dom'

export default function MainView(props) {
  return (
    <li>
      <div className="workout-preview-title-container">
        <Link to={`/workout/${props.workoutId}`}>
          <h3 className="workout-preview-title">{props.workoutTitle}</h3>
        </Link>
        <p className="workout-preview-time">{'9:30(temp)'}</p>
      </div>
      <p className="workout-preview-description"></p>
    </li>
  );
}

