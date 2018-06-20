import React from 'react';
import './Poll.css';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux'

const Poll = ({ question, answered, user }) => {

  if (!answered){
    return (
      <div className="Poll">
        <p className='Option One'>{ question.optionOne.text }</p>
        <p className='OptionDivider'>or</p>
        <p className='Option Two'>{ question.optionTwo.text }?</p>
        <Link to={'/questions/' + question.id} ><i className="material-icons">arrow_forward</i><p className='label'>Vote</p></Link>
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
      <Link to={'/questions/' + question.id} ><i className="material-icons">subject</i><p className='label'>Details</p></Link>
    </div>
  )
}

Poll.propTypes = {
  user: propTypes.object.isRequired,
  question: propTypes.object.isRequired,
  answered: propTypes.bool.isRequired
}

const mapDispatchToProps = null;

const mapStateToProps = (state, ownProps) => ({
  user: state.users.currentUser,
  question: ownProps.question,
  answered: ownProps.answered
});

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
