import React from 'react';
import './PollDetails.css';
//import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const PollDetails = ({ questions, users, uuid }) => {
  let question = questions? questions[uuid] : null;
  return (
    <div className="PollDetails">
      <Link to='/'>Go Home</Link>
      <h1>Poll Details</h1>
      {questions?
        <div className="details">
          <p>Author: {users[question.author].name}</p>
          <p>Timestamp: {question.timestamp}</p>
          <p>Option 1: {question.optionOne.text}</p>
          <p>Votes ({question.optionOne.votes.length}):</p>
          { question.optionOne.votes.map(v => (
            <p key={v}>{users[v].name}</p>
          ))}
          <p>Option 2: {question.optionTwo.text}</p>
          <p>Votes ({question.optionTwo.votes.length}):</p>
          { question.optionTwo.votes.map(v => (
            <p key={v}>{users[v].name}</p>
          ))}
        </div>
        :
        null
      }
    </div>
  )
}

//PollDetails.propTypes = {}

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = (state, ownProps) => ({
  questions: state.questions.byId,
  users: state.users.byId,
  uuid: ownProps.uuid
});

export default connect(mapStateToProps, mapDispatchToProps)(PollDetails);
