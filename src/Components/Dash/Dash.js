import React, { Component } from 'react';
import Parts from '../Parts/Parts';
import Header from '../Header/Header';

class Dash extends Component {
  render() {
    return (
      <div>
        HOME
        <Header />
        <Parts />     
      </div>
    )
  }
}

export default Dash;