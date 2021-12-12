import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaMedal } from 'react-icons/fa'
import UserCard from './UserCard'

class Leaderboard extends Component {
    render() {
        const { users } = this.props;

        return (
            <>
                <div className="icon-avatar h-8 w-8">
                    <FaMedal className="text-lg font-bold text-gray-500" />
                </div>
                <p className="small-heading">LEADERBOARD</p>
                <ul className="w-1/3">
                    {
                        Object.keys(users).map((id, index) => {
                            const user = users[id]
                            return (
                                <li key={id}>
                                    <UserCard
                                        rank={index + 1}
                                        name={user['name']}
                                        avatar={user['avatarURL']}
                                        answered={Object.keys(user['answers']).length}
                                        asked={Object.keys(user['questions']).length}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users).sort((a, b) => {
            const scoreA = Object.keys(a['answers']).length + Object.keys(a['questions']).length
            const scoreB = Object.keys(b['answers']).length + Object.keys(b['questions']).length
            return scoreB - scoreA
        })
    }
}

export default connect(mapStateToProps)(Leaderboard); 