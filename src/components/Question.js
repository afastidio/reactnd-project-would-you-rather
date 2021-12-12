import React from 'react';
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import QuestionCardAnswered from './QuestionCardAnswered';
import QuestionCardUnanswered from './QuestionCardUnanswered';

const Question = () => {
    const { question_id } = useParams();

    const questionItem = useSelector(({ questions, users, currentUser }) => { 
        const question = questions[question_id];

        if(!question) return null;

        const authorId = question['author'];
        const author = users[authorId];
        const answered = question['optionOne']['votes'].includes(currentUser) || question['optionTwo']['votes'].includes(currentUser);
        let userVote = null;

        if(answered) userVote = question['optionOne']['votes'].includes(currentUser) ? 'optionOne' : 'optionTwo';

        return {
            author: author['name'],
            authorAvatar: author['avatarURL'],
            optionOne: question['optionOne'],
            optionTwo: question['optionTwo'],
            totalVotes: question['optionOne']['votes'].length + question['optionTwo']['votes'].length,
            userVote
        }
    })

    if(questionItem == null) {
        return <Navigate to="/not-found"/>
    }

    const { author, authorAvatar, optionOne, optionTwo, userVote, totalVotes} = questionItem; 

    const showQuestionCard = (option, optionId) => {
        if(userVote) {
           return <QuestionCardAnswered option={option} userVote={userVote === optionId} total={totalVotes}/>
        } else {
            return <QuestionCardUnanswered questionId={question_id} optionText={option['text']} optionId={optionId}/>
        }
    }
    
    return (
        <>
            <div
                className="url-avatar h-28 w-28"
                style={{ backgroundImage: `url('${authorAvatar}')` }}
            >
            </div>
            <p className="small-heading">{author} asks</p>
            <p className="main-heading">Would you rather...</p>
            
            {showQuestionCard(optionOne, 'optionOne')}
            
            <p className="font-bold my-3 text-base">OR</p>
            
            {showQuestionCard(optionTwo, 'optionTwo')}
        </>
    )
}

export default Question;