import React from 'react';
import ExerciseTableHeader from '../ExerciseTableHeader/ExerciseTableHeader'
import Exercise from '../Exercise/Exercise'
import './ExerciseTable.css';

export default function ExerciseTable(props) {

  let exerciseRows = [];

  for (let i = 0; i < props.exercises; i++) {
    exerciseRows.push(
      <Exercise
        key={i}
        exerciseNumber={i}
        onChange={props.onChange}
        sets={props.sets}
        workout={props.workout}
      />
    );
  }

  return (
    <div className="exercise-table-container">
      <table className="workout-view-exercises">
        <ExerciseTableHeader sets={props.sets} />
        <tbody>
          {exerciseRows}
        </tbody>
      </table>
    </div>
  );
}
