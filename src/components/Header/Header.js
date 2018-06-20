import React from 'react';
import './Header.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/Users'
import { Link } from 'react-router-dom';

const Header = ({ user, logout }) => {

  return (
    <div className="Header">
      <p className="HeaderTitle">Would You Rather</p>
      { user?
        <div className="UserInfo" >
          <p className="Username">{ user.name }</p>
          <Link to='/' onClick={ logout }>Logout</Link>
        </div>
        :
        null
      }
    </div>
  )
}

Header.propTypes = {
  logout: propTypes.func.isRequired,
  user: propTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

const mapStateToProps = state => ({
  user: state.users.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
