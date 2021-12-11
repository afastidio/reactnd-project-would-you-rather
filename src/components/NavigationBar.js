import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';
import { setCurrentUser } from '../actions/currentUser';

class NavigationBar extends Component {
    logout = () => {
        this.props.dispatch(setCurrentUser(null));
    }

    render() {
        const { currentUser } = this.props;

        return (
            <div className="flex justify-between items-center px-4 bg-blue-300 h-14 text-white">
                <p className="font-bold text-xl">WOULD YOU RATHER?</p>
                <div className="flex justify-between w-1/3">    
                    <Link to="/">Home</Link>
                    <Link to="leaderboard">Leaderboard</Link>
                    <Link to="add">New Question</Link>
                </div>
                <div className="flex flex-row items-center">
                    {currentUser &&
                        <>
                            <p className="italic mr-4">Welcome, {currentUser}!</p>
                            <Link to="/" onClick={this.logout}>
                                <FiLogOut/>
                            </Link>
                        </>
                    } 
                </div>  
            </div>
        )
    }
}

function mapStateToProps ({ currentUser, users }) {
    return {
      currentUser: currentUser ? users[currentUser]['name'] : null
    }
}

export default connect(mapStateToProps)(NavigationBar);