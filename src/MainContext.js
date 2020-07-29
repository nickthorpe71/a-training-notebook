import React, { Component } from "react";
import TokenService from "./services/token-service";
import store from './components/store';

const MainContext = React.createContext({})

export default MainContext;

export class MainProvider extends Component {
  state = {
    username: '',
    email: '',
    loggedIn: TokenService.hasAuthToken(),
    registered: TokenService.hasAuthToken(),
    error: null,
    selectedDate: new Date(),
    matchingWorkouts: [],
    editing: false,
  };

  handleSetError = (error) => {
    this.setState({ error });
  }

  saveUserInfo = (username, email) => {
    this.setState({ username, email });
  };

  handleLoginState = (isLoggedIn) => {
    this.setState({
      loggedIn: isLoggedIn,
    });
  };

  handleRegisteredState = (isRegistered) => {
    this.setState({
      registered: isRegistered,
    });
  };

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
      matchingWorkouts: matchingWorkouts,
      editing: true,
    });
  }

  render() {
    const value = {
      username: this.state.username,
      loggedIn: this.state.loggedIn,
      registered: this.state.registered,
      error: this.state.error,
      selectedDate: this.state.selectedDate,
      matchingWorkouts: this.state.matchingWorkouts,
      editing: this.state.matchingWorkouts,
      handleDayClick: this.handleDayClick,
      handleLoginState: this.handleLoginState,
      handleRegisteredState: this.handleRegisteredState,
      saveUserInfo: this.saveUserInfo,
    };
    return (
      <MainContext.Provider value={value}>
        {this.props.children}
      </MainContext.Provider>
    );
  }
}