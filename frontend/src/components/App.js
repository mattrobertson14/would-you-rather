import React, { Component } from 'react';
import '../stylesheets/App.css';
//import { Route } from 'react-router-dom';
import Login from './Login';
import Appbar from './Appbar';
import ToolbarUserInfo from './ToolbarUserInfo';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Appbar>
          { this.props.user? <ToolbarUserInfo user={ this.props.user } /> : null }
        </Appbar>
        <div className='MainContent'>
          { this.props.user?
            <h1>The game will be here soon</h1>
            :
            <Login />
          }
        </div>
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
