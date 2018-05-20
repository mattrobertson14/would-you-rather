import React from 'react';
import './Home.css';
//import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateQuestionView as updateQuestionViewAction } from '../../redux/actions/Questions';
import { PollList } from '../';

const Home = ({ questions, questionView, updateQuestionView, user }) => {
  let unanswered = questions.all.filter(q => !hasVoted(user.id, q))
  let answered = questions.all.filter(q => hasVoted(user.id, q))

  return (
    <div className="Home">
      <h1 className='HomeHeader'>{questionView === 'answered'? 'You Would Rather...' : 'Would You Rather...' }</h1>
      <div className='changeView'>
        <p className='ViewTag'>View</p>
        <select onChange={(ev) => updateQuestionView(ev.target.value)} value={questionView}>
          <option value='answered'>Answered</option>
          <option value='unanswered'>Unanswered</option>
        </select>
        <p className='LabelTag'>Polls</p>
      </div>
      { questionView === 'answered'?
        <PollList questions={ answered } answered={ true }/>
        :
        <PollList questions={ unanswered } />
      }
    </div>
  )
}

const hasVoted = (userId, question) => {
  if (question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId)){
    return true;
  }
  return false;
}

//Home.propTypes = {}

const mapDispatchToProps = dispatch => ({
  updateQuestionView: ( val ) => dispatch( updateQuestionViewAction( val ) )
});

const mapStateToProps = state => ({
  questions: state.questions,
  questionView: state.questions.questionView,
  user: state.users.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
