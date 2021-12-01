import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import currentUser from "./currentUser";

export default combineReducers({
    currentUser,
    questions,
    users
});