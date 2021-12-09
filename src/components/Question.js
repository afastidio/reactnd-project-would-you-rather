import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import QuestionCardAnswered from './QuestionCardAnswered';
import QuestionCardUnanswered from './QuestionCardUnanswered';

const Question = () => {
    const { question_id } = useParams();

    const questionItem = useSelector(({ questions, users, currentUser }) => { 
        const question = questions[question_id];
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
                className="rounded-full h-28 w-28 bg-black"
                style={{
                    backgroundImage: `url('${authorAvatar}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }}
            >
            </div>
            <p className="uppercase text-gray-500 text-base my-2">{author} asks</p>
            <p className="font-bold text-xl mb-6">Would you rather...</p>
            
            {showQuestionCard(optionOne, 'optionOne')}
            
            <p className="font-bold my-3 text-base">OR</p>
            
            {showQuestionCard(optionTwo, 'optionTwo')}
        </>
    )
}

export default Question;