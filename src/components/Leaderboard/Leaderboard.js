import React from 'react';
import './Leaderboard.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { LeaderBoardTable } from '../';

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

    return u;
  })

  let sorted = users.sort((a,b) => countObj[b.id].total - countObj[a.id].total);

  return (
    <div className="Leaderboard">
      <h1>Leaderboard</h1>
      <LeaderBoardTable countInfo={countObj} users={sorted} />
    </div>
  )
}

const getQuestionsAsked = (user, questions) => {
  let count = 0;

  questions.map(q => {
    if (q.author === user.id) count++;
    return q;
  })

  return count;
}

const getQuestionsAnswered = (user, questions) => {
  let count = 0;

  questions.map(q => {
    if (q.optionOne.votes.includes(user.id) || q.optionTwo.votes.includes(user.id)) count++;
    return q;
  })

  return count;
}

Leaderboard.propTypes = {
  questions : propTypes.array.isRequired,
  questionsObj : propTypes.object.isRequired,
  users : propTypes.array.isRequired,
  usersObj : propTypes.object.isRequired,
  loading : propTypes.bool.isRequired
}

const mapDispatchToProps = null;

const mapStateToProps = state => ({
  questions : state.questions.all,
  questionsObj : state.questions.byId,
  users : state.users.all,
  usersObj : state.users.byId,
  loading : state.questions.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
