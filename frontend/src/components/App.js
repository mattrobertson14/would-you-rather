import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Route } from 'react-router-dom';
import Login from './Login';
import { getAllUsers } from '../Utils/api';

class App extends Component {
  state = {
    users : []
  }

  componentWillMount(){
    getAllUsers().then(res => {
      this.setState({users : Object.values(res) });
    });
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={() => <Login users={ this.state.users }/> } />
      </div>
    );
  }
}

export default App;
