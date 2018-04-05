import React from 'react';
//import '../stylesheets/UserOption.css';
import propTypes from 'prop-types';
import { Avatar } from './UI';

const UserOption = ({ name }) => {

  return (
    <div className="UserOption">
      <Avatar size='small' />
      <p>{ name }</p>
    </div>
  )
}

UserOption.propTypes = {
  name : propTypes.string
}

export default UserOption;
