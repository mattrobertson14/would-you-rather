import React from 'react';
import './NewPoll.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { newQuestion } from '../../redux/actions/Questions';
import { withRouter } from 'react-router-dom';

const NewPoll = ({ addQuestion, user, history }) => {
  let optionOne, optionTwo;

  const submit = () => {
    let one = optionOne.value;
    let two = optionTwo.value
    if ( one.splice !== '' && two.splice !== ''){
      addQuestion(one, two, user.id);
      optionOne.value = '';
      optionTwo.value = '';
      history.push('/');
    }
  }

  return (
    <div className="NewPoll">
      <p className="NewPollTitle">Would You Rather</p>
      <label htmlFor='optionOne'>Option 1</label>
      <input ref={i=>optionOne=i} className="optionOne" placeholder='e.x. Do this'/>
      <p className="or">or</p>
      <label htmlFor='optionTwo'>Option 2</label>
      <input ref={i=>optionTwo=i} className="optionTwo" placeholder='e.x Do that'/>
      <button onClick={submit}>Submit</button>
    </div>
  )
}

NewPoll.propTypes = {
  addQuestion: propTypes.func.isRequired,
  user: propTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  addQuestion: (one, two, uId) => dispatch(newQuestion(one, two, uId))
});

const mapStateToProps = state => ({
  user: state.users.currentUser
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPoll));
