import React from 'react';
import './Home.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateQuestionView as updateQuestionViewAction } from '../../redux/actions/Questions';
import { PollList } from '../';
import { BarLoader } from 'react-spinners';

const Home = ({ questions, questionView, updateQuestionView, user, loading }) => {
  let unanswered = questions.all.filter(q => !hasVoted(user.id, q))
  let answered = questions.all.filter(q => hasVoted(user.id, q))

  return (
    <div className="Home">
      {loading? <BarLoader height={8} color={'#4192F4'} /> : null }
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

Home.propTypes = {
  updateQuestionView: propTypes.func.isRequired,
  questions: propTypes.func.isRequired,
  questionView: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired,
  user: propTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  updateQuestionView: ( val ) => dispatch( updateQuestionViewAction( val ) )
});

const mapStateToProps = state => ({
  questions: state.questions,
  questionView: state.questions.questionView,
  loading: state.questions.loading,
  user: state.users.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
