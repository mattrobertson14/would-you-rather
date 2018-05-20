import React from 'react';
import './Home.css';
//import propTypes from 'prop-types';

const Home = ({ questions }) => {

  return (
    <div className="Home">
      { questions?
        questions.map(q => (
          <span key={q.id}>
            <p>Option 1: {q.optionOne.text}</p>
            <p>Option 2: {q.optionTwo.text}</p>
          </span>
        ))
        :
        null
      }
    </div>
  )
}

//Home.propTypes = {}

export default Home;
