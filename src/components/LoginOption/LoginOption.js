import React from 'react';
import './LoginOption.css';
//import propTypes from 'prop-types';

const LoginOption = ({ user, login }) => {
  return (
    <div className="LoginOption" onClick={login}>
      <img src={`${user.avatarURL}`} className='avatar' />
      <span>{ user.name }</span>
    </div>
  )
}

//LoginOption.propTypes = {}

export default LoginOption;
