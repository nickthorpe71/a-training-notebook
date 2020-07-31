import React from 'react';
import Context from '../../MainContext';
import WorkoutHeader from './WorkoutHeader/WorkoutHeader'
import ExerciseTable from './ExerciseTable/ExerciseTable'
import TokenService from '../../services/token-service'
import WorkoutsApiService from '../../services/workouts-api-service'
import './WorkoutView.css';

export default class WorkoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSetsPer: 0,
      numExercises: 0,
      workoutTitle: '',
      workoutTime: '',
      notes: '',
      workoutDate: new Date(),
      currentWorkout: {},
    };
  }

  static contextType = Context;

  componentDidMount = () => {
    if (this.props.match.params.workoutId !== 'new') {
      const workout_id = this.props.match.params.workoutId;

      const date = new Date();
      const timestamp = date.getTime();

      WorkoutsApiService.getWorkoutById(workout_id)
        .then(workout => {
          const numExercises = workout.exercises.length;
          let numSets = 0;

          workout.exercises.forEach(exercise => {
            if (exercise.sets.length > numSets)
              numSets = exercise.sets.length
          })

          this.setState({
            numSetsPer: numSets,
            numExercises: numExercises,
            workoutTitle: workout.title,
            workoutTime: timestamp,
            workoutDate: workout.workout_date,
            currentWorkout: workout
          })

        })
    } else {
      this.setState({
        numExercises: 6,
        numSetsPer: 4,
        date: this.setDate(this.context.selectedDate)
      })
    }
  }

  handleDeleteClick = (event) => {
    event.preventDefault();
    WorkoutsApiService.deleteWorkout(this.state.currentWorkout.id);
    this.props.history.push('/');
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const modDate = new Date(
      this.state.workoutDate.getFullYear(),
      this.state.workoutDate.getMonth(),
      this.state.workoutDate.getDate()
    ).toUTCString()

    console.log('1111', modDate)
    console.log('22222', this.state.workoutDate)

    const workoutObj = {
      user_id: TokenService.getUserId(),
      title: this.state.workoutTitle,
      notes: this.state.notes,
      time: this.state.workoutTime,
      date: modDate,
      exercises: []
    }

    for (const [key, value] of Object.entries(this.state)) {
      if (key.includes('exercise')) {
        console.log(key, key.charAt(8));
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
        if (workoutObj.exercises && 'sets' in workoutObj.exercises[key.charAt(6)])
          workoutObj.exercises[key.charAt(6)].sets.push(newSet);
      }
      if (key.includes('reps')) {
        if (workoutObj.exercises && workoutObj.exercises[key.charAt(4)].sets && 'reps' in workoutObj.exercises[key.charAt(4)].sets[key.charAt(6)])
          workoutObj.exercises[key.charAt(4)].sets[key.charAt(6)].reps = value;
      }
    }

    if (this.props.match.params.workoutId === 'new') {
      console.log('we are posting a new workout')
      WorkoutsApiService.postWorkout(workoutObj);
    } else {
      console.log('we are editing a workout')
      console.log(workoutObj)
    }

    this.props.history.push('/');
  }

  setDate = (date) => {
    const newDate = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
      '-' + date.getDate().toString().padStart(2, 0);

    console.log(newDate, this.state.workoutDate)
    this.setState({ workoutDate: date });
    console.log(newDate, this.state.workoutDate)
  }

  getNotes = () => {
    return this.state.currentWorkout.notes;
  }

  getSetsCount = () => {
    return this.state.numSetsPer;
  }

  getExerciseCount = () => {
    return this.state.numExercises;
  }

  handlieBackButton = () => {
    this.props.history.push('/');
  }

  handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;

    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  }

  renderDeleteButton = () => {
    return (
      <button
        className="unlit-button"
        onClick={this.handleDeleteClick}
      >delete
      </button>
    )
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
              placeholder={this.getSetsCount()}
              value={this.getSetsCount()}
              onChange={this.handleChange}
            />
            <label htmlFor="numExercises">Exercises</label>
            <input
              name="numExercises"
              type="number"
              className="workout-num-exercises"
              placeholder={this.getExerciseCount()}
              value={this.getExerciseCount()}
              onChange={this.handleChange}
            />
          </div>
          <ExerciseTable
            onChange={this.handleChange}
            sets={this.getSetsCount()}
            exercises={this.getExerciseCount()}
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
              {this.props.match.params.workoutId !== 'new'
                ? this.renderDeleteButton()
                : <></>}
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

