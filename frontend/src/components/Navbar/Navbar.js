import React from 'react';
import './Navbar.css';
//import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="Navbar">
      <div className='options'>
        <Link to='/'>Home</Link>
        <Link to='/new-poll'>New Poll</Link>
        <Link to='/scoreboard'>Scoreboard</Link>
      </div>
    </div>
  )
}

//Navbar.propTypes = {}

export default Navbar;
