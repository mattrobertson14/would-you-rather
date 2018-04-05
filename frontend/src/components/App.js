import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Route } from 'react-router-dom';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={ Login } />
      </div>
    );
  }
}

export default App;
