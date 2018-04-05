import React from 'react';
//import '../stylesheets/UserMenu.css';
import Dropdown from './Dropdown';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser as logoutUserAction } from '../actions/Users';

const UserMenu = ({ logout, className }) => {

  return (
    <div className={ className }>
      <Dropdown width={ 200 }>
        <p onClick={ logout }><i className='material-icons'>exit_to_app</i>Logout</p>
      </Dropdown>
    </div>
  )
}

UserMenu.propTypes = {
  logout : propTypes.func,
  className : propTypes.string.isRequired
}

const mapDispatchToProps = dispatch=> ({
  logout: ()=>dispatch(logoutUserAction())
});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
