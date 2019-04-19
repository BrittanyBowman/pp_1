import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Parts from './Components/Parts/Parts';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Parts />
      </div>
    );
  }
}

export default App;
