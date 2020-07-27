import React from 'react';
import WorkoutHeader from './WorkoutHeader/WorkoutHeader'
import ExerciseTable from './ExerciseTable/ExerciseTable'
import './WorkoutView.css';

export default class WorkoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSetsPer: 5,
      numExercises: 8,
      workoutTitle: '',
      workoutTime: '',
      workoutDate: new Date(),

    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;

    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="workout-view" >
        <form
          className="card-container exercise-form"
          id="exercise-form"
          onSubmit={e => this.handleSubmit(e)}
        >
          <WorkoutHeader onChange={this.handleChange} />
          <ExerciseTable
            onChange={this.handleChange}
            sets={this.state.numSetsPer}
            exercises={this.state.numExercises}
          />
          <section className="workout-view-footer">
            <div>
              <button className="workout-view-back">back</button>
              <button className="lit-button">save</button>
            </div>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="10"
              onChange={this.handleChange}
            ></textarea>
          </section>
        </form>
      </div >
    );
  }
}

