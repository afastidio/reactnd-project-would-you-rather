import React, { useState } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../actions/currentUser';

const Login = ({ users, dispatch, setNewUserMode, from }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    const navigate = useNavigate();

    const options = Object.keys(users).map((id) => ({
        value: id,
        label: users[id]['name']
    }))

    const handleButtonClick = () => {
        setNewUserMode(true);
        setSelectedUser(null);
    }

    const handleDropdownChange = (event) => {
        setSelectedUser(event.value);
    }

    const handleSubmit = () => {
        dispatch(setCurrentUser(selectedUser));
        navigate(from, { replace: true });
    }

    return (
        <>
            <div className="mt-10 mb-4">
                {!selectedUser ?
                    <div className="icon-avatar h-20 w-20">
                        <p className="text-3xl font-bold text-gray-500">?</p>
                    </div> :
                    <div className="flex flex-col items-center">
                        <div
                            className="url-avatar h-20 w-20"
                            style={{ backgroundImage: `url('${users[selectedUser]['avatarURL']}')` }}
                        >
                        </div>
                        <p className="text-xs text-gray-500 italic mt-1">via
                            <a 
                                className="text-blue-400" 
                                target="blank"
                                href={users[selectedUser]['avatarURL']}> 
                                &nbsp;Google Search Images
                            </a>
                        </p>
                    </div>
                }
            </div>

            <Select
                placeholder="Select a user..."
                options={options}
                value={options.find(user => user.value === selectedUser)}
                onChange={handleDropdownChange}
                className="w-1/2" />

            {Object.keys(users).length < 8 &&
                <button
                    className="text-blue-500 text-xs my-2"
                    onClick={handleButtonClick}>
                    New User?
                </button>
            }

            <button
                className={`button my-4 ${selectedUser ? 'bg-blue-400' : 'bg-gray-300'}`}
                disabled={!selectedUser}
                onClick={handleSubmit}>
                Submit
            </button>
        </>
    )
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);