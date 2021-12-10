import React, { Component } from 'react';
import { IoMdSad } from 'react-icons/io';
import { Link } from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <>
                <IoMdSad className="text-5xl text-blue-400" />
                <p className="text-9xl text-blue-400 font-bold tracking-wide">404</p>
                <p className="text-3xl text-gray-600 tracking-wide my-6">Oops, page not found!</p>
                <button className={'bg-blue-400 rounded text-white px-4 py-2 mt-10'}>
                    <Link to="/home">Go back to home page</Link>
                </button>
            </>
        )
    }
}

export default NotFound; 