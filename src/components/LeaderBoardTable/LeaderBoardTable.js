import React from 'react';
import './LeaderBoardTable.css';
import propTypes from 'prop-types';
import { LeaderboardUser } from '../';

const LeaderBoardTable = ({ countInfo, users }) => {

  return (
    <div className="LeaderBoardTable">
      <div className='TableHeader' >
        <p className='HCell Picture'><i class="material-icons">person</i></p>
        <p className='HCell Name'>Name</p>
        <p className='HCell Asked'>Polls Asked</p>
        <p className='HCell Answered'>Polls Answered</p>
        <p className='HCell Total'>Total</p>
      </div>
      {users.map(usr => (
        <LeaderboardUser userInfo={ countInfo[usr.id] } key={usr.id} />
      ))}
    </div>
  )
}

LeaderBoardTable.propTypes = {
  countInfo: propTypes.object.isRequired,
  users: propTypes.array.isRequired
}

export default LeaderBoardTable;
