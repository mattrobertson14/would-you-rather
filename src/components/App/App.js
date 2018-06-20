import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Header, Navbar, Body, Login } from '../'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        { this.props.user?
          <span>
            <Navbar />
            <Body />
          </span>
          :
          <Login />
        }
      </div>
    );
  }
}

const mapDispatchToProps = null;

const mapStateToProps = state => ({
  user : state.users.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
