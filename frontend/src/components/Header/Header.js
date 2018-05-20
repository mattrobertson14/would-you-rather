import React from 'react';
import './Header.css';
//import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/Users'

const Header = ({ user, logout }) => {

  return (
    <div className="Header">
      <p className="HeaderTitle">Would You Rather</p>
      <div className="UserInfo" onClick={ logout }>
        <p className="Username">{ user? user.name : null }</p>
      </div>
    </div>
  )
}

//Header.propTypes = {}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

const mapStateToProps = state => ({
  user: state.users.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
