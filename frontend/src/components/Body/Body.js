import React from 'react';
import './Body.css';
//import propTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Home, Leaderboard, NewPoll, PollDetails } from '../';

const Body = () => {

  return (
    <div className="Body">
      <Route exact path='/' render={ Home } />
      <Route path='details/:uuid' render={ PollDetails } />
      <Route path='/new-poll' render={ NewPoll } />
      <Route path='/leaderboard' render={ Leaderboard } />
    </div>
  )
}

//Body.propTypes = {}

export default Body;
