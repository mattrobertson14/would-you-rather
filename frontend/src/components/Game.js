import React from 'react';
//import '../stylesheets/Game.css';
//import propTypes from 'prop-types';
import { Route } from 'react-router-dom';
import UnansweredPoll from './UnansweredPoll';

const Game = ({}) => {

  return (
    <div className="Game">
      <Route path='/unansweredPoll' component={ UnansweredPoll } />
    </div>
  )
}

//Game.propTypes = {}

export default Game;
