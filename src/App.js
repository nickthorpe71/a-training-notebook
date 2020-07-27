import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Context from './Context';
import MainView from './components/MainView/MainView';
import WorkoutView from './components/WorkoutView/WorkoutView';
import SignUpView from './components/SignUpView/SignUpView';
import LoginView from './components/LoginView/LoginView';
import LandingView from './components/LandingView/LandingView';
import HelpView from './components/HelpView/HelpView';
import BurgerMenu from './components/Nav/BurgerMenu';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
    }
  }

  render() {
    const value = {
      selectedDate: this.state.selectedDate,
      onDayClick: this.handleDayClick
    }
    return (
      <Context.Provider value={value}>
        <div className="App">
          <header className="header">
            <Link to='/'>
              <h1 className="logo">a training notebook</h1>
            </Link>
            <BurgerMenu />
          </header>
          <section className="view">
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
          </section>
        </div>
      </Context.Provider>
    );
  }

  handleDayClick = (newDay) => {
    const { selectedDate } = this.state;

    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(), //this will need to change to desired month if we want to allow month navigation
        newDay
      )
    });
  }
}
