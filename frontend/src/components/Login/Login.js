import React from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { loadUsers, loginUser as loginUserAction } from '../../redux/actions/Users';
import { LoginOption } from '../';
//import propTypes from 'prop-types';

const Login = ({ loadUsers, loginUser, users }) => {

  if (users.all.length === 0) loadUsers();

  return (
    <div className="Login">
      <p className='LoginTitle'>Login</p>
      <div className='LoginOptions'>
        { users?
          users.all.map(user => (
            <LoginOption key={ user.id }  user={ user } login={ (user)=>loginUser(user) } />
          ))
          :
          null
        }
      </div>
    </div>
  )
}

//Login.propTypes = {}

const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch( loadUsers() ),
  loginUser: ( user ) => dispatch( loginUserAction(user) )
});

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
