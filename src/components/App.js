import React, { Component } from 'react';
import '../App.css';
import AddUsers from './AddUsers';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>All users</h1>
        <AddUsers />
      </div>
    );
  }
}

export default App;
