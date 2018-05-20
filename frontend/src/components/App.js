import React, { Component } from 'react';
import '../stylesheets/App.css';
//import { Route } from 'react-router-dom';
import Login from './Login';
import Appbar from './Appbar';
import Game from './Game';
import ToolbarUserInfo from './ToolbarUserInfo';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Appbar>
          { this.props.user? <ToolbarUserInfo user={ this.props.user } /> : null }
        </Appbar>
        <Route path='/' render={() =>(
          <div className='MainContent'>
            { this.props.user?
              <Game />
              :
              <Login />
            }
          </div>
        )} />
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
