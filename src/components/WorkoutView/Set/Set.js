import React from 'react';

export default function Set(props) {

  let placeholderWeight = '';
  let placeholderReps = '';

  if (props.exerciseNumber === 0) {
    placeholderWeight = 'Weight';
    placeholderReps = 'Reps';
  }

  return (
    <td className="set-col">
      <div>
        <div>
          <label htmlFor="weight"></label>
          <input
            className="set-input"
            name={`weight${props.exerciseNumber + 1}_${props.setNumber + 1}`}
            type="text" placeholder={placeholderWeight}
            onChange={props.onChange}
          />
        </div>
        <div>
          <label htmlFor="reps"></label>
          <input
            className="set-input"
            name={`reps${props.exerciseNumber + 1}_${props.setNumber + 1}`}
            type="text" placeholder={placeholderReps}
            onChange={props.onChange}
          />
        </div>
      </div>
    </td>
  );
}
