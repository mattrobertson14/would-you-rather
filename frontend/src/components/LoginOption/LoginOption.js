import React from 'react';
import './LoginOption.css';
//import propTypes from 'prop-types';

const LoginOption = ({ user, login }) => {
  return (
    <div className="LoginOption" onClick={login}>
      { user.name }
    </div>
  )
}

//LoginOption.propTypes = {}

export default LoginOption;
