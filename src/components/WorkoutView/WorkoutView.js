import React from 'react';
import Context from '../../MainContext';
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
      currentWorkout: {}
    };
  }

  static contextType = Context;

  componentDidMount() {
    if (this.context.editing) {
      const currentWorkout = this.context.matchingWorkouts.find(workout => workout.workoutId == this.props.match.params.workoutId);
      this.setState({
        numSetsPer: currentWorkout.numSetsPer,
        numExercises: currentWorkout.numExercises,
        workoutTitle: currentWorkout.workoutTitle,
        workoutTime: currentWorkout.workoutTime,
        workoutDate: currentWorkout.workoutDate,
        currentWorkout: currentWorkout
      })
    }
  }

  getNotes = () => {
    return this.state.currentWorkout.notes;
  }

  handlieBackButton = () => {
    console.log(this.getNotes());
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
          <WorkoutHeader
            onChange={this.handleChange}
            workout={this.state.currentWorkout}
          />
          <div>
            <label htmlFor="numSetsPer">Sets</label>
            <input
              name="numSetsPer"
              type="number"
              className="workout-num-sets"
              placeholder={this.state.numSetsPer}
              defaultValue={this.state.numSetsPer}
              onChange={this.handleChange}
            />
            <label htmlFor="numExercises">Exercises</label>
            <input
              name="numExercises"
              type="number"
              className="workout-num-exercises"
              placeholder={this.state.numExercises}
              defaultValue={this.state.numExercises}
              onChange={this.handleChange}
            />
          </div>
          <ExerciseTable
            onChange={this.handleChange}
            sets={this.state.numSetsPer}
            exercises={this.state.numExercises}
            workout={this.state.currentWorkout}
          />
          <section className="workout-view-footer">
            <div>
              <button
                className="workout-view-back"
                onClick={this.handlieBackButton}
              >back
              </button>
              <button className="lit-button">save</button>
            </div>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="10"
              onChange={this.handleChange}
              value={this.getNotes()}
            ></textarea>
          </section>
        </form>
      </div >
    );
  }
}

