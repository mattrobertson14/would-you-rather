import React from 'react';
import '../stylesheets/Login.css';
import UserOption from './UserOption';
import propTypes from 'prop-types';
import { Card } from './UI';

const Login = ({ users }) => {
  const height = users? (120 + users.length*84) : 120;

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
              <UserOption key={user.name} name={ user.name } />
            ))
            : null
          }
        </div>
      </Card>
    </div>
  )
}

Login.propTypes = {
  users : propTypes.array
}

export default Login;
