import React from 'react';
import './LeaderboardUser.css';
import propTypes from 'prop-types';

const LeaderboardUser = ({ userInfo }) => {

  return (
    <div className="LeaderboardUser">
      <p className='Cell Avatar'><img src={`${userInfo.user.avatarURL}`} className='avatar' alt='avatar' /></p>
      <p className='Cell Name'>{userInfo.user.name}</p>
      <p className='Cell Asked'>{userInfo.asked}</p>
      <p className='Cell Answered'>{userInfo.answered}</p>
      <p className='Cell Total'>{userInfo.total}</p>
    </div>
  )
}

LeaderboardUser.propTypes = {
  userInfo: propTypes.object.isRequired
}

export default LeaderboardUser;
