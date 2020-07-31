import React from 'react';
import { Link } from 'react-router-dom'
import { IoIosTrash, IoMdCreate } from "react-icons/io";

export default function MainView(props) {
  return (
    <li>
      <div className="workout-preview-title-container">
        <Link to={`/workout/${props.workoutId}`}>
          <h3 className="workout-preview-title">{props.workoutTitle}</h3>
        </Link>
        <p className="workout-preview-time">{/*add time here later*/}</p>
        <Link to={`/workout/${props.workoutId}`}>
          <button className="unlit-button"><IoMdCreate></IoMdCreate></button>
        </Link>
        <button className="unlit-button"><IoIosTrash></IoIosTrash></button>
      </div>
      <p className="workout-preview-description"></p>
    </li >
  );
}

