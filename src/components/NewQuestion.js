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
            navigate('/home');
        })
    }

    return (
        <>
            <div className="flex rounded-full h-8 w-8 bg-gray-300 items-center justify-center">
                <p className="text-lg font-bold text-gray-500">?</p>
            </div>
            <p className="uppercase text-gray-500 text-base my-2">Ask a new question</p>
            <p className="font-bold text-xl my-6">Would you rather...</p>

            <input
                className="border border-blue-400 rounded p-2 w-1/3"
                style={{ boxShadow: "0 3px 10px #d3d3d3" }}
                placeholder="Option 1"
                value={optionOne}
                onChange={(event) => { setOptionOne(event.target.value) }}
            />

            <p className="font-bold my-3 text-base">OR</p>

            <input
                className="border border-blue-400 rounded p-2 w-1/3"
                style={{ boxShadow: "0 3px 10px #d3d3d3" }}
                placeholder="Option 2"
                value={optionTwo}
                onChange={(event) => { setOptionTwo(event.target.value) }}
            />

            <button
                className={`${optionOne && optionTwo ? 'bg-blue-400' : 'bg-gray-300'} rounded text-white px-4 py-2 my-6`}
                disabled={!optionOne || !optionTwo}
                onClick={handleSubmit}>
                Submit
            </button>
        </>
    )
}

export default connect()(NewQuestion); 