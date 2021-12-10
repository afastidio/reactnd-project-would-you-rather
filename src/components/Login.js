import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../actions/currentUser';
import { addUser, handleAddUser } from '../actions/users';

const Login = ({ users, dispatch }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [newUserMode, setNewUserMode] = useState(false);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    const from = state ? state.from.pathname : '/home';

    const options = Object.keys(users).map((id) => ({
        value: id,
        label: users[id]['name']
    }))

    const handleButtonClick = () => {
        setNewUserMode(!newUserMode)
        setSelectedUser(null);
        setName('');
        setUsername('');
    }

    const handleDropdownChange = (event) => {
        setSelectedUser(event.value)
    }

    const handleSubmit = () => {
        if (!newUserMode) {
            dispatch(setCurrentUser(selectedUser));
            navigate(from, { replace: true });
        } else {
            dispatch(handleAddUser(name, username))
            .then(() =>{
                navigate(from, { replace: true });
            });
        }
    }

    const disabled = newUserMode ? (!name || !username) : !selectedUser;

    return (
        <div
            className="flex flex-col rounded-lg w-1/3 text-center items-center"
            style={{ boxShadow: "0 3px 10px #d3d3d3" }}
        >
            <p className="mt-6 text-xl font-bold">Welcome!</p>
            <p className="italic">Please sign in to continue</p>
            <div className="mt-10 mb-4">
                {!selectedUser ?
                    <div className="flex rounded-full h-20 w-20 bg-gray-300 items-center justify-center">
                        <p className="text-3xl font-bold text-gray-500">?</p>
                    </div> :
                    <div
                        className="rounded-full h-20 w-20"
                        style={{
                            backgroundImage: `url('${users[selectedUser]['avatarURL']}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }}
                    >
                    </div>
                }
            </div>

            {!newUserMode || Object.keys(users).length > 8 ?
                <Select
                    placeholder="Select a user..."
                    options={options}
                    value={options.find(user => user.value === selectedUser)}
                    onChange={handleDropdownChange}
                    className="w-1/2" /> :
                <div className="flex flex-col w-1/2">
                    <input
                        className="border border-blue-400 rounded p-2 my-2"
                        style={{ boxShadow: "0 3px 10px #d3d3d3" }}
                        placeholder="Name"
                        value={name}
                        onChange={(event) => { setName(event.target.value) }}
                    />
                    <input
                        className="border border-blue-400 rounded p-2 my-2"
                        style={{ boxShadow: "0 3px 10px #d3d3d3" }}
                        placeholder="Username"
                        value={username}
                        onChange={(event) => { setUsername(event.target.value) }}
                    />
                </div>
            }



            {Object.keys(users).length < 8 &&
                <button
                    className="text-blue-500 text-xs my-2"
                    onClick={handleButtonClick}>
                    {newUserMode ? 'Select existing user' : 'New User?'}
                </button>
            }

            <button
                className={`${!disabled ? 'bg-blue-400' : 'bg-gray-300'} rounded text-white px-4 py-2 my-4`}
                disabled={disabled}
                onClick={handleSubmit}>
                Submit
            </button>
        </div>

    )

}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);