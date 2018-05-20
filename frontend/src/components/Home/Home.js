import React from 'react';
import './Home.css';
//import propTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

const Home = ({ questions }) => {

  return (
    <div className="Home">
      { questions.length > 0?
        questions.map(q => (
          <span key={q.id}>
            <p>Option 1: {q.optionOne.text}</p>
            <p>Option 2: {q.optionTwo.text}</p>
          </span>
        ))
        :
        <span className='loader'>
          <ClipLoader />
        </span>
      }
    </div>
  )
}

//Home.propTypes = {}

export default Home;
