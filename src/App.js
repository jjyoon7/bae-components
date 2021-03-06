import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

import BaeCalendar from './components/calendar/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="center-item">
          <BaeCalendar
            theme="salmon"
            onDateSelect={(date) => {
              console.log(`The callback is accessing the date: ${date}`);
              return date;
            }}
            activeDates={null}
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
