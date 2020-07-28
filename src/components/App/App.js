import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Context from '../../MainContext';
import MainView from '../../components/MainView/MainView';
import WorkoutView from '../../components/WorkoutView/WorkoutView';
import SignUpView from '../../components/SignUpView/SignUpView';
import LoginView from '../../components/LoginView/LoginView';
import LandingView from '../../components/LandingView/LandingView';
import HelpView from '../../components/HelpView/HelpView';
import BurgerMenu from '../../components/Nav/BurgerMenu';
import store from '../store';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
      matchingWorkouts: [],
    }
  }

  render() {
    const value = {
      selectedDate: this.state.selectedDate,
      matchingWorkouts: this.state.matchingWorkouts,
      onDayClick: this.handleDayClick
    }
    return (
      <Context.Provider value={value}>
        <div className="App">
          <header className="header">
            <Link to='/'>
              <h1 className="logo">a training notebook</h1>
            </Link>
            <BurgerMenu right={true} />
          </header>
          <main className="view">
            {this.state.hasError && <p className='red'>There was an error!</p>}
            <Route
              exact
              path="/"
              component={MainView} />
            <Route
              exact
              path="/signup"
              component={SignUpView} />
            <Route
              exact
              path="/login"
              component={LoginView} />
            <Route
              path="/workout/:workoutId"
              component={WorkoutView} />
            <Route
              exact
              path="/landing"
              component={LandingView} />
            <Route
              exact
              path="/help"
              component={HelpView} />
          </main>
        </div>
      </Context.Provider>
    );
  }

  handleDayClick = (newDay) => {
    const { selectedDate } = this.state;
    let matchingWorkouts = [];

    const newFullDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(), //this will need to change to desired month if we want to allow month navigation
      newDay
    );

    //search database for all workouts with newFullDate
    store.store.forEach(workout => {
      const date1 = workout.workoutDate;
      date1.setHours(0, 0, 0, 0);
      const date2 = newFullDate;
      date2.setHours(0, 0, 0, 0);

      if (date1.getDate() === date2.getDate()) {
        matchingWorkouts.push(workout);
      }
    });

    this.setState({
      selectedDate: newFullDate,
      matchingWorkouts: matchingWorkouts
    });
  }
}
