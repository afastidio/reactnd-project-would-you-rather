import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <>
                <Link to="home">Home</Link>
                <Link to="leaderboard">Leaderboard</Link>
                <Link to="new-question">Add New Question</Link>
                <Link to="/">Sign Out</Link>
            </>
        )
    }
}

export default NavigationBar; 