import { _saveQuestionAnswer, _saveQuestion } from '../_DATA'
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'

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

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { currentUser } = getState();
    const questionInfo = {
      author: currentUser,
      optionOneText,
      optionTwoText
    }

    dispatch(showLoading());

    return _saveQuestion(questionInfo)
      .then((formattedQuestion) => {
        dispatch(saveQuestion(formattedQuestion))
      })
      .then(() => {
        dispatch(hideLoading());
      })
  }
}