import { _saveQuestionAnswer } from '../_DATA'
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { currentUser } = getState();
    const answerInfo = {
      authedUser: currentUser,
      qid,
      answer
    }

    dispatch(showLoading());

    return _saveQuestionAnswer(answerInfo)
      .then(() => {
        dispatch(saveAnswer(answerInfo))
      })
      .then(() => {
        dispatch(hideLoading());
      })
  }
}