import React from 'react';
import '../stylesheets/Login.css';
import UserOption from './UserOption';
import propTypes from 'prop-types';
import { Card } from './UI';
import { connect } from 'react-redux';
import { loadUsers as loadUsersAction, loginUser as loginUserAction } from '../actions/Users';

const Login = ({ users, getAllUsers, loginUser }) => {
  const height = users? (120 + users.length*84) : 120;
  if (users.length === 0) getAllUsers();

  return (
    <div className="Login">
      <Card style={{ height : height + 'px' }}>
        <div className='header'>
          <h2>Login</h2>
          <span className="divider" />
        </div>
        <div className='users'>
          { users?
            users.map(user => (
              <UserOption key={user.name} name={ user.name } onClick={ () => loginUser(user) }/>
            ))
            : null
          }
        </div>
      </Card>
    </div>
  )
}

Login.propTypes = {
  users : propTypes.array,
  getAllUsers : propTypes.func,
  loginUser : propTypes.func
}

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(loadUsersAction()),
  loginUser: ( user ) => dispatch(loginUserAction( user ))
});

const mapStateToProps = state => ({
  users: state.users.all
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
