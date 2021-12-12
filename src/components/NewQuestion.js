import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions';
import { useNavigate } from 'react-router-dom';

const NewQuestion = ({ dispatch }) => {
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch(handleSaveQuestion(optionOne, optionTwo)).then(() => {
            navigate('/');
        })
    }

    return (
        <>
            <div className="icon-avatar h-8 w-8">
                <p className="text-lg font-bold text-gray-500">?</p>
            </div>
            <p className="small-heading">Ask a new question</p>
            <p className="main-heading">Would you rather...</p>

            <input
                className="input w-1/3"
                style={{ boxShadow: "0 3px 10px #d3d3d3" }}
                placeholder="Option 1"
                value={optionOne}
                onChange={(event) => { setOptionOne(event.target.value) }}
            />

            <p className="font-bold my-3 text-base">OR</p>

            <input
                className="input w-1/3"
                style={{ boxShadow: "0 3px 10px #d3d3d3" }}
                placeholder="Option 2"
                value={optionTwo}
                onChange={(event) => { setOptionTwo(event.target.value) }}
            />

            <button
                className={`button my-6 ${optionOne && optionTwo ? 'bg-blue-400' : 'bg-gray-300'}`}
                disabled={!optionOne || !optionTwo}
                onClick={handleSubmit}>
                Submit
            </button>
        </>
    )
}

export default connect()(NewQuestion); 