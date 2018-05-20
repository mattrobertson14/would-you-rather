import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header, Body } from '../'

class App extends Component {

  render() {
    return (
      <div className="App">
        App
        <Header />
        <Body />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
  user : state.users.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
