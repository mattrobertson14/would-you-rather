import React from 'react';
//import '../stylesheets/Appbar.css';
import propTypes from 'prop-types';

const Appbar = ({ children }) => {

  return (
    <div className="Appbar">
      <p className='title'>Would You Rather</p>
      {children}
    </div>
  )
}

Appbar.proptTypes = {
  children : propTypes.node
}

export default Appbar;
