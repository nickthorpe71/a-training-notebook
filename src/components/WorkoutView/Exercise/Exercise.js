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
        thisSet={props.exercise.sets[i]}
        exerciseNumber={props.exerciseNumber}
        onChange={props.onChange}
      />
    )
  }

  return (
    <tr className="exercise-row">
      <td className="exercise-col">
        <label htmlFor={`exercise${props.exerciseNumber}`}></label>
        <input
          className="exercise-input"
          name={`exercise${props.exerciseNumber}`}
          type="text" placeholder={exercisePalceholder}
          value={props.exercise.title}
          onChange={props.onChange} />
      </td>
      {sets}
    </tr>
  );
}
