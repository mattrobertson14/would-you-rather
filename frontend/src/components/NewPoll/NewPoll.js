import React from 'react';
import './NewPoll.css';
//import propTypes from 'prop-types';

const NewPoll = () => {
  let optionOne, optionTwo;

  return (
    <div className="NewPoll">
      <p className="NewPollTitle">Would You Rather</p>
      <label htmlFor='optionOne'>Option 1</label>
      <input ref={i=>optionOne=i} className="optionOne" placeholder='e.x. Do this'/>
      <p className="or">or</p>
      <label htmlFor='optionTwo'>Option 2</label>
      <input ref={i=>optionTwo=i} className="optionTwo" placeholder='e.x Do that'/>
      <button>Submit</button>
    </div>
  )
}

//NewPoll.propTypes = {}

export default NewPoll;
