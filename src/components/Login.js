import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../actions/currentUser';

const Login = ({ users, dispatch }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    const navigate = useNavigate();

    const handleDropdownChange = (event) => {
        setSelectedUser(event.value)
    }

    const handleSubmit = () => {
        console.log("Submitting...");
        dispatch(setCurrentUser(selectedUser));
        navigate('home');
    }

    const options = Object.keys(users).map((id) => ({
        value: id,
        label: users[id]['name']
    }))

    return (
        <div className="flex justify-center items-center">
            <div
                className="flex flex-col rounded-lg w-1/3 text-center items-center justify-center drop-shadow-lg"
                style={{ boxShadow: "0 3px 10px #d3d3d3" }}
            >
                <p className="mt-6 text-xl font-bold">Welcome!</p>
                <p className="italic">Please sign in to continue</p>
                <div className="mt-10 mb-4">
                    { !selectedUser ? 
                        <div className="flex rounded-full h-20 w-20 bg-gray-300 self-center items-center justify-center">
                            <p className="text-3xl font-bold text-gray-500">?</p>
                        </div> : 
                        <div 
                            className="flex rounded-full h-20 w-20 bg-gray-300 self-center items-center justify-center"
                            style={{
                                backgroundImage: `url('${users[selectedUser]['avatarURL']}')`,
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center center'
                            }}
                        >
                        </div> 
                    }
                </div>
                <Select 
                    placeholder="Select a user..." 
                    options={options} 
                    value={options.find(user => user.value === selectedUser)}
                    onChange={handleDropdownChange}
                    className="w-1/2" />
                <button 
                    className={`${selectedUser ? 'bg-blue-400' : 'bg-gray-300'} rounded text-white px-4 py-2 my-4`}
                    disabled={!selectedUser}
                    onClick={handleSubmit}>
                        Submit
                </button>
            </div>
        </div>

    )

}

function mapStateToProps ({ users }) {
    return {
      users
    }
}

export default connect(mapStateToProps)(Login);