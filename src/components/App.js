import React, { Component } from 'react';
import '../App.css';
import AddUsers from './AddUsers';
import Articles from './Articles';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>All users</h1>
        <AddUsers />
        <Articles />
      </div>
    );
  }
}

export default App;
