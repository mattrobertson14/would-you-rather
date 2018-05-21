import React from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { loadUsers, loginUser as loginUserAction } from '../../redux/actions/Users';
import { LoginOption } from '../';
//import propTypes from 'prop-types';
import { BarLoader } from 'react-spinners';

const Login = ({ loadUsers, loginUser, users, loading }) => {

  if (users.all.length === 0) loadUsers();

  return (
    <div className="Login">
      {loading? <BarLoader height={8} color={'#4192F4'} /> : null }
      <p className='LoginTitle'>Login</p>
      <div className='LoginOptions'>
        { users?
          users.all.map(user => (
            <LoginOption key={ user.id }  user={ user } login={ ()=> loginUser( user ) } />
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
  users: state.users,
  loading: state.users.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
