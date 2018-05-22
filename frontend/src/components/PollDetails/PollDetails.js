import React from 'react';
import './PollDetails.css';
//import propTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { OptionDetails } from '../';

const PollDetails = ({ questions, users, user, uuid }) => {
  let question = questions? questions[uuid] : null;
  return (
    <div className="PollDetails">
      <h1>Would You Rather</h1>
      {questions?
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
        :
        null
      }
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

//PollDetails.propTypes = {}

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = (state, ownProps) => ({
  questions: state.questions.byId,
  users: state.users.byId,
  user: state.users.currentUser,
  uuid: ownProps.uuid
});

export default connect(mapStateToProps, mapDispatchToProps)(PollDetails);
