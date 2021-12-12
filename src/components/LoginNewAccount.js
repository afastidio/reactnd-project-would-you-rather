import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddUser } from '../actions/users';

const LoginNewAccount = ({ dispatch, setNewUserMode, from }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const handleButtonClick = () => {
        setNewUserMode(false);
        setName('');
        setUsername('');
    }

    const handleSubmit = () => {
        dispatch(handleAddUser(name, username))
            .then(() => {
                navigate(from, { replace: true });
            });
    }

    return (
        <>
            <div className="mt-10 mb-4">
                <div className="icon-avatar h-20 w-20">
                    <p className="text-3xl font-bold text-gray-500">?</p>
                </div>
            </div>

            <div className="flex flex-col w-1/2">
                <input
                    className="input"
                    style={{ boxShadow: "0 3px 10px #d3d3d3" }}
                    placeholder="Name"
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                />
                <input
                    className="input"
                    style={{ boxShadow: "0 3px 10px #d3d3d3" }}
                    placeholder="Username"
                    value={username}
                    onChange={(event) => { setUsername(event.target.value) }}
                />
            </div>

            <button
                className="text-blue-500 text-xs my-2"
                onClick={handleButtonClick}>
                Select existing user
            </button>

            <button
                className={`button my-4 ${(name && username) ? 'bg-blue-400' : 'bg-gray-300'}`}
                disabled={!name || !username}
                onClick={handleSubmit}>
                Submit
            </button>
        </>
    )
}

export default connect()(LoginNewAccount);