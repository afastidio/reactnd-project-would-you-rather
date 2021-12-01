import { _getUsers, _getQuestions } from "../_DATA"
import { receiveQuestions } from "./questions"
import { receiveUsers } from "./users"

export function getInitialData () {
    return (dispatch) => {
      return Promise.all([_getUsers(), _getQuestions()])
        .then((values) => {
          dispatch(receiveUsers(values[0]))
          dispatch(receiveQuestions(values[1]))
        })
    }
}