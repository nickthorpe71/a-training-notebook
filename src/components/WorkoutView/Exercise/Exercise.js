import React from 'react';
import Set from '../Set/Set'
import './Exercise.css';

export default function Exercise(props) {

  let sets = [];
  let exercisePalceholder = '';

  if (props.exerciseNumber === 0) {
    exercisePalceholder = 'Exercise';
  }

  for (let i = 0; i < props.sets; i++) {
    sets.push(
      <Set
        key={i}
        setNumber={i}
        exerciseNumber={props.exerciseNumber}
        onChange={props.onChange}
      />
    )
  }

  return (
    <tr className="exercise-row">
      <td className="exercise-col">
        <label htmlFor="exercise"></label>
        <input
          className="exercise-input"
          name={`exercise${props.exerciseNumber + 1}`}
          type="text" placeholder={exercisePalceholder}
          onChange={props.onChange} />
      </td>
      {sets}
    </tr>
  );
}
