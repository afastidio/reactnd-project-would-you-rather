import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/questions';

class QuestionCardUnanswered extends Component {
    render() {
        const { questionId, optionText, optionId, dispatch } = this.props;

        const handleSave = () => {
            dispatch(handleSaveAnswer(questionId, optionId));
        }

        return (
            <button
                className="p-2 border border-blue-400 w-1/3 text-center my-2 rounded-lg"
                style={{ boxShadow: "0 3px 10px #d3d3d3" }}
                onClick={handleSave}>
                <p>{optionText}</p>
            </button>
        )
    }
}

export default connect()(QuestionCardUnanswered);