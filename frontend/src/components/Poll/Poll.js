import React from 'react';
import './Poll.css';
import { Link, withRouter } from 'react-router-dom';
//import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveQuestionAnswer } from '../../redux/actions/Questions';

const Poll = ({ question, answered, user, saveAnswer, history }) => {

  const castVote = (uId, qId, answer) => {
    saveAnswer(uId, qId, answer);
    setTimeout(()=>history.push('/details/' + question.id), 500);
  }

  if (!answered){
    return (
      <div className="Poll">
        <p className='Option One'>{ question.optionOne.text }</p>
        <p className='OptionDivider'>or</p>
        <p className='Option Two'>{ question.optionTwo.text }?</p>
        <Link to={'/details/' + question.id} ><i className="material-icons">arrow_forward</i><p className='label'>Vote</p></Link>
      </div>
    )
  }

  let selected = question.optionOne.votes.includes(user.id)? 'optionOne' : 'optionTwo';
  let notSelected = selected === 'optionOne'? 'optionTwo' : 'optionOne';
  return (
    <div className="Poll">
      <p className='Option Selected'>{ question[selected].text }</p>
      <p className='OptionDivider'>than</p>
      <p className='Option'>{ question[notSelected].text }</p>
      <Link to={'/details/' + question.id} ><i className="material-icons">subject</i><p className='label'>Details</p></Link>
    </div>
  )
}

//Poll.propTypes = {}

const mapDispatchToProps = dispatch => ({
  saveAnswer : (uId, qId, answer) => dispatch(saveQuestionAnswer(uId, qId, answer))
});

const mapStateToProps = (state, ownProps) => ({
  user: state.users.currentUser,
  question: ownProps.question,
  answered: ownProps.answered
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Poll));
