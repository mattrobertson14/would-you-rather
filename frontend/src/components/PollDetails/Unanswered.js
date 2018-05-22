import React from 'react';
//import propTypes from 'prop-types';

const Unanswered = ({ question, user }) => {

  return (
    <div className="Unanswered">
      <div className="details">
        <p className="Option">Option 1: {question.optionOne.text}</p>
        <p className="Option">Option2: {question.optionTwo.text}</p>
      </div>
    </div>
  )
}

//Unanswered.propTypes = {}

export default Unanswered;
