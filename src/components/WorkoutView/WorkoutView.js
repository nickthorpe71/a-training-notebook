import React from 'react';
import Context from '../../MainContext';
import WorkoutHeader from './WorkoutHeader/WorkoutHeader'
import ExerciseTable from './ExerciseTable/ExerciseTable'
import TokenService from '../../services/token-service'
import './WorkoutView.css';

export default class WorkoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSetsPer: 4,
      numExercises: 6,
      workoutTitle: '',
      workoutTime: '',
      notes: '',
      workoutDate: new Date(),
      currentWorkout: {},
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const workoutObj = {
      user_id: TokenService.getUserId,
      title: this.state.workoutTitle,
      notes: this.state.notes,
      time: this.state.workoutTime,
      date: this.state.workoutDate,
      exercises: []
    }

    for (const [key, value] of Object.entries(this.state)) {
      if (key.includes('exercise')) {
        // console.log(key, key.charAt(8));
        const newExercise = {
          title: value,
          sets: []
        }
        workoutObj.exercises.push(newExercise);
      }
      if (key.includes('weight')) {
        const newSet = {
          setNum: key.charAt(8),
          weight: value,
          reps: 0,
        }
        workoutObj.exercises[key.charAt(6)].sets.push(newSet);
      }
      if (key.includes('reps')) {
        workoutObj.exercises[key.charAt(4)].sets[key.charAt(6)].reps = value;
      }
    }
    console.log(workoutObj)
  }

  static contextType = Context;

  componentWillMount() {
    if (this.context.editing) {
      //pull from database instead of from context
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

