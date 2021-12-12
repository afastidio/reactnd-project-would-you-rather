import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginExistingAccount from './LoginExistingAccount';
import LoginNewAccount from './LoginNewAccount';

const Login = () => {
    const [newUserMode, setNewUserMode] = useState(false);

    const location = useLocation();
    const state = location.state;
    const from = state ? state.from.pathname : '/';

    return (
        <div
            className="flex flex-col rounded-lg w-1/3 text-center items-center"
            style={{ boxShadow: "0 3px 10px #d3d3d3" }}
        >
            <p className="mt-6 text-xl font-bold">Welcome!</p>
            <p className="italic">Please sign in to continue</p>

            {!newUserMode ?
                <LoginExistingAccount setNewUserMode={setNewUserMode} from={from} /> :
                <LoginNewAccount setNewUserMode={setNewUserMode} from={from} />
            }
        </div>
    )
}

export default Login;