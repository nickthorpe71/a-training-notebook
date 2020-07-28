import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Context from '../../../MainContext';
import WorkoutSummary from '../WorkoutSummary/WorkoutSummary'

export default function DayPreview(props) {

  const context = useContext(Context);

  console.log(context.selectedDate);

  const day = [];
  day[0] = "Sun";
  day[1] = "Mon";
  day[2] = "Tue";
  day[3] = "Wed";
  day[4] = "Thur";
  day[5] = "Fri";
  day[6] = "Sat";

  const todaysDate = `${context.selectedDate.getMonth()}/${context.selectedDate.getDate()}`
  const displayDate = day[context.selectedDate.getDay()];

  function renderWorkouts() {
    const { matchingWorkouts = [] } = context;

    return matchingWorkouts.map((workout, index) =>
      <li>
        <WorkoutSummary key={index} workoutNum={index} />
      </li>
    );
  }

  return (
    <section className="note-preview">
      <div className="note-preview-title">
        <h3>{displayDate}</h3>
        <h3>{todaysDate}</h3>
      </div>
      <ul className="workout-preview-list">
        {renderWorkouts()}
      </ul>
      <div className="add-button">
        <Link to='/workout/new'>
          <button>+</button>
        </Link>
      </div>
    </section>
  );
}

