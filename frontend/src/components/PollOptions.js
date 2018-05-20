import React from 'react';
import '../stylesheets/PollOptions.css';
//import propTypes from 'prop-types';

const PollOptions = ({}) => {

  return (
    <div className="PollOptions">
      <div className="Option One">
        <p className='OptionTitle'>Option 1</p>
        <p className='OptionBody'>
          This is option 1 which is something you can choose if you want to
        </p>
      </div>
      <div className="Option Two">
        <p className='OptionTitle'>Option 2</p>
        <p className='OptionBody'>
          This is option 2 which is something you can choose if you want to fdasfdasfdasfasdfdasfdasfas
        </p>
      </div>
    </div>
  )
}

//PollOptions.propTypes = {}

export default PollOptions;
