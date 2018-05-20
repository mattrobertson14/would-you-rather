import React, { Component } from 'react';
import './Body.css';
//import propTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Home, Leaderboard, NewPoll, PollDetails } from '../';
import { connect } from 'react-redux';
import { loadQuestions } from '../../redux/actions/Questions'


class Body extends Component {

  componentDidMount() {
    this.props.loadQuestions();
  }

  render() {
    return (
      <div className="Body">
        <Route exact path='/' component={ Home } />
        <Route path='details/:uuid' component={ PollDetails } />
        <Route path='/new-poll' component={ NewPoll } />
        <Route path='/leaderboard' component={ Leaderboard } />
      </div>
    )
  }
}

//Body.propTypes = {}

const mapDispatchToProps = dispatch => ({
  loadQuestions: () => dispatch( loadQuestions() )
});

const mapStateToProps = state => ({
  questions: state.questions,
  user: state.users.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
