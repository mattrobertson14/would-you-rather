import React from 'react';
import './PollDetails.css';
//import propTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { saveQuestionAnswer } from '../../redux/actions/Questions';
import Answered from './Answered';
import Unanswered from './Unanswered';
import { BarLoader } from 'react-spinners';

const PollDetails = ({ questions, users, user, uuid, loading, castVote }) => {
  let question = questions? questions[uuid] : null;
  let answered = question? question.optionOne.votes.includes(user.id) || question.optionTwo.votes.includes(user.id) : null;

  if (questions && !question)
    return (<NotFound />);

  return (
    <div className="PollDetails">
      {loading?
        <BarLoader height={8} color={'#4192F4'} />
        :
        <span>
          <h1>Would You Rather</h1>
          <img src={`${users[question.author].avatarURL}`} className='avatar' />
          <p className="pollInfo">This poll was asked by {users[question.author].name} on {getDate(question.timestamp)} at {getTime(question.timestamp)}</p>
          {answered?
            <Answered question={question} users={users} user={user} />
            :
            <Unanswered question={question} user={user} castVote={castVote}/>
          }
        </span>
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

const NotFound = () => {
  return (
    <div className="NotFound">
      <p className="NotFoundtitle">404</p>
      <p>The poll you are trying to access doesn't seem to appear in our system. So sorry</p>
    </div>
  )
}

//PollDetails.propTypes = {}

const mapDispatchToProps = dispatch => ({
  castVote : (uId, qId, answer) => dispatch(saveQuestionAnswer(uId, qId, answer))
});

const mapStateToProps = (state, ownProps) => ({
  questions: state.questions.byId,
  users: state.users.byId,
  user: state.users.currentUser,
  loading: state.questions.loading,
  uuid: ownProps.uuid
});

export default connect(mapStateToProps, mapDispatchToProps)(PollDetails);
