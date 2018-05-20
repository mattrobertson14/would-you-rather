import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Header, Body, Login } from '../'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        { this.props.user?
          <Body />
          :
          <Login />
        }
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
