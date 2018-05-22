import React from 'react';
import './OptionDetails.css';
//import propTypes from 'prop-types';

const OptionDetails = ({ number, option, votes, users, currentUser }) => {
  let selected = votes.for.includes(currentUser.id);
  return (
    <div className="OptionDetails">
      {selected? <p className="SelectedLabel">Your Choice</p> : null }
      <p className={selected? "Option Selected" : "Option"}>Option {number}: { option }</p>
      <p className="VoteBreakdown">{ percentFor(votes) }% of the votes in this poll were for Option { number }. A total of {numberFor(votes.for)} voted for this.</p>
      <p className="VoteListLabel">{votes.for.length > 0? 'These' : 'No'} Users voted for this poll:</p>
      <ul className="VoteList">
        {votes.for.map(vote => (
          <li key={vote}>{users[vote].name} {vote === currentUser.id? '- You' : null}</li>
        ))}
      </ul>
    </div>
  )
}

const percentFor = (votes) => {
  let yes = votes.for.length;
  let no = votes.against.length;
  let total = yes + no;
  let percent = yes/total*100;
  return Math.floor(percent);
}

const numberFor = (votes) => {
  let count = votes.length;
  let label = (count === 1)? ' person' : ' people';
  return count + label;
}

//OptionDetails.propTypes = {}

export default OptionDetails;
