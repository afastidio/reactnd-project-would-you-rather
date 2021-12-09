import React, { Component } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { FaCheckCircle } from 'react-icons/fa';

class AnsweredQuestionCard extends Component {
    render() {
        const { option, userVote, total } = this.props;
        const percent = Math.round((option['votes'].length / total) * 100);
        const barColor = userVote ? "#3B82F6" : "#374151";

        return (
            <div className={`flex flex-col items-center p-2 border ${userVote ? 'border-blue-400 ' : 'border-gray-400'} w-1/3 text-center my-2 rounded-lg`}
                style={{ boxShadow: `0 0 5px 5px ${userVote ? '#60A5FA' : '#d3d3d3'}` }}>
                <div className="flex flex-row items-center justify-center mb-4">
                    <p className={userVote ? 'text-blue-400 font-bold' : ''}>
                        {option['text']}
                    </p>
                    {userVote && <FaCheckCircle className="text-blue-400 mx-2" />}
                </div>

                <div className="w-2/3">
                    <ProgressBar
                        className="my-2"
                        completed={percent}
                        height="15px"
                        labelColor={percent > 0 ? "#FFFFFF" : barColor}
                        bgColor={barColor} />
                    <p className="text-xs">{option['votes'].length} out of {total} votes</p>
                </div>
            </div>
        )
    }
}

export default AnsweredQuestionCard;