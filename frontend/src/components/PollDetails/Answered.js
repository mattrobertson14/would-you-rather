import React from 'react';
import moment from 'moment';
import { OptionDetails } from '../';
//import propTypes from 'prop-types';

const Answered = ({ question, users, user }) => {

  return (
    <div className="Answered">
      <div className="details">
        <p className="pollInfo">This poll was asked by {users[question.author].name} on {getDate(question.timestamp)} at {getTime(question.timestamp)}</p>
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

const getDate = (timestamp) => {
  let date = moment(timestamp).format('dddd, MMMM Do YYYY');
  return date;
}

const getTime = (timestamp) => {
  let time = moment(timestamp).format('hh:mm:ss a');
  return time;
}

//Answered.propTypes = {}

export default Answered;
