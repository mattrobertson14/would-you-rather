import React from 'react';
import './Navbar.css';
//import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { updateQuestionView } from '../../redux/actions/Questions';
import { connect } from 'react-redux';

const Navbar = ({ resetQuestionView }) => {

  return (
    <div className="Navbar">
      <div className='options'>
        <Link to='/' onClick={ resetQuestionView }>Home</Link>
        <Link to='/add'>New Poll</Link>
        <Link to='/scoreboard'>Scoreboard</Link>
      </div>
    </div>
  )
}

//Navbar.propTypes = {}

const mapDispatchToProps = dispatch => ({
  resetQuestionView: () => dispatch( updateQuestionView('unanswered') )
});

const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
