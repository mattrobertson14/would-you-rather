import React from 'react';
import { OptionDetails } from '../';
import propTypes from 'prop-types';

const Answered = ({ question, users, user }) => {

  return (
    <div className="Answered">
      <div className="details">
        <OptionDetails
          number={1}
          option={question.optionOne.text}
          votes={{for: question.optionOne.votes, against: question.optionTwo.votes}}
          users={users}
          currentUser={user}
        />
        <OptionDetails
          number={2}
          option={question.optionTwo.text}
          votes={{for: question.optionTwo.votes, against: question.optionOne.votes}}
          users={users}
          currentUser={user}
        />
      </div>
    </div>
  )
}

Answered.propTypes = {
  question: propTypes.object.isRequired,
  users: propTypes.object.isRequired,
  user: propTypes.object.isRequired
}

export default Answered;
