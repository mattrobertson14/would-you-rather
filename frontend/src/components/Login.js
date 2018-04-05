import React from 'react';
import '../stylesheets/Login.css';
import UserOption from './UserOption';
import { Card } from './UI';

const users = [
  { name : 'Michaella Robertson'},
  { name : 'Matthew Robertson' },
  { name : 'Tyler Robertson' },
  { name : 'Someone Else' }
]

const Login = () => {
  const height = (120 + users.length*84);

  return (
    <div className="Login">
      <Card style={{ height : height + 'px' }}>
        <div className='header'>
          <h2>Login</h2>
          <span className="divider" />
        </div>
        <div className='users'>
          {
            users.map(user => (
              <UserOption key={user.name} name={ user.name } />
            ))
          }
        </div>
      </Card>
    </div>
  )
}

export default Login;
