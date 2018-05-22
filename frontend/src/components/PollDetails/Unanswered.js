import React from 'react';
//import propTypes from 'prop-types';

const Unanswered = ({ question, user, castVote }) => {

  return (
    <div className="Unanswered">
      <div className="details">
        <p className="Option" onClick={ () => castVote( user.id, question.id, 'optionOne' ) }>Option 1: {question.optionOne.text}</p>
        <p className="Option" onClick={ () => castVote( user.id, question.id, 'optionTwo' ) }>Option2: {question.optionTwo.text}</p>
      </div>
    </div>
  )
}

//Unanswered.propTypes = {}

export default Unanswered;
