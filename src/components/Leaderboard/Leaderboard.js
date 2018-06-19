import React from 'react';
import './Leaderboard.css';
//import propTypes from 'prop-types';
import { connect } from 'react-redux';

const Leaderboard = ({ questions, questionsObj, users, usersObj }) => {

  let countObj = {}
  let asked;
  let answered;
  let total;

  users.map(u => {
    asked = getQuestionsAsked(u, questions);
    answered = getQuestionsAnswered(u, questions);
    total = asked + answered;

    countObj[u.id] = {
      user: u,
      asked,
      answered,
      total
    }
  })

  let sorted = users.sort((a,b) => countObj[b.id].total - countObj[a.id].total);

  return (
    <div className="Leaderboard">
      <h1>Leaderboard</h1>
      {sorted.map(usr => <p>{usr.name} - {countObj[usr.id].total}</p>)}
    </div>
  )
}

const getQuestionsAsked = (user, questions) => {
  let count = 0;

  questions.map(q => {
    if (q.author === user.id) count++;
  })

  return count;
}

const getQuestionsAnswered = (user, questions) => {
  let count = 0;

  questions.map(q => {
    if (q.optionOne.votes.includes(user.id) || q.optionTwo.votes.includes(user.id)) count++;
  })

  return count;
}

// Leaderboard.propTypes = {}

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
  questions : state.questions.all,
  questionsObj : state.questions.byId,
  users : state.users.all,
  usersObj : state.users.byId,
  loading : state.questions.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
