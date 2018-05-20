import React from 'react';
import '../stylesheets/UnansweredPoll.css';
import propTypes from 'prop-types';
import { Card } from './UI'
import PollOptions from './PollOptions';

const UnansweredPoll = ({}) => {

  return (
    <div className="UnansweredPoll">
      <Card>
        <p className='Title'>
          Would You Rather...
        </p>
        <p className='Question'>
          Do Option A or do Option B?
        </p>
        <PollOptions />
      </Card>
    </div>
  )
}

UnansweredPoll.propTypes = {}

export default UnansweredPoll;
