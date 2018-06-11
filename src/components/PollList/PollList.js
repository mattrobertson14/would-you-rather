import React from 'react';
import './PollList.css';
//import propTypes from 'prop-types';
import { Poll } from '../';

const PollList = ({ questions, answered }) => {

  return (
    <div className="PollList">
      {
        questions.sort((a,b) => b.timestamp-a.timestamp).map(q => (
          <Poll key={q.id} question={q} answered={ answered } />
        ))
      }
    </div>
  )
}

//PollList.propTypes = {}

export default PollList;