import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Context from './Context';
import Calendar from './components/MainView/Calendar/Calendar.js';
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
          <header class="header">
            <Link to='/'>
              <h1 class="logo">a training notebook</h1>
            </Link>
            <button class="burger-menu">burger</button>
          </header>
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
