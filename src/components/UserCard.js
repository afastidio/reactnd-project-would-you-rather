import React, { Component } from 'react';

class UserCard extends Component {
    render() {
        const { name, avatar, answered, asked, rank } = this.props;

        return (
            <div
                className="rounded-lg my-4 py-2"
                style={{ boxShadow: "0 3px 10px #d3d3d3" }}
            >
                <div 
                    className="flex h-8 w-14 bg-blue-400 items-center justify-end px-2 mt-2"
                    style={{ boxShadow: "0 8px 6px -6px #d3d3d3"}}
                >
                    <p className="text-white font-bold">{rank}</p>
                </div>

                <div className="flex flex-row my-6 px-4">
                    <div
                        className="rounded-full h-28 w-28 mr-8"
                        style={{
                            backgroundImage: `url('${avatar}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }}
                    ></div>

                    <div className="flex flex-row w-3/4">
                        <div className="w-2/3 mx-2">
                            <p className="font-bold text-2xl">{name}</p>
                            <p className="text-gray-600 my-2"><span className="font-bold text-blue-400 mr-4">{answered}</span> Questions Answered</p>
                            <p className="text-gray-600 my-2"><span className="font-bold text-blue-400 mr-4">{asked}</span> Questions Asked </p>
                        </div>
                        <div className="flex flex-col items-center border-l-2 w-1/3">
                            <p className="mb-4 font-bold text-lg">Total</p>
                            <div className="flex rounded-full h-14 w-14 bg-blue-400 items-center justify-center">
                                <p className="font-bold text-white">{answered + asked}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard; 