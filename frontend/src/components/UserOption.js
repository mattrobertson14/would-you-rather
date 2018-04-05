import React from 'react';
//import '../stylesheets/UserOption.css';
import propTypes from 'prop-types';
import { Avatar } from './UI';

const UserOption = ({ name, onClick }) => {

  return (
    <div className="UserOption" onClick={ onClick }>
      <Avatar size='small' />
      <p>{ name }</p>
    </div>
  )
}

UserOption.propTypes = {
  name : propTypes.string,
  onClick : propTypes.func
}

export default UserOption;
