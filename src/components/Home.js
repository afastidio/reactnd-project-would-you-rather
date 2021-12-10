import React, { useState } from 'react';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

const Home = ({ dispatch, ...props }) => {
    const [selectedTab, setSelectedTab] = useState('unanswered');

    return (
        <div className="flex flex-col items-center w-full">
            <ul className="flex flex-row justify-evenly border border-blue-400 rounded-lg h-8 w-1/2">
                {
                    Object.keys(props).map(tab => (
                        <li
                            key={tab}
                            className={`${selectedTab === tab ? 'bg-blue-400 text-white' : 'bg-white text-blue-400'} w-1/2 text-center rounded-lg capitalize cursor-pointer`}
                            onClick={() => setSelectedTab(tab)}
                        >
                            {tab}
                        </li>
                    ))
                }
            </ul>
            <ul className="w-1/3">
                {
                    props[selectedTab].map(id => (
                        <li key={id}>
                            <QuestionCard id={id} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

function mapStateToProps({ questions, users, currentUser }) {
    return {
        unanswered: Object.keys(questions)
            .filter(id => !Object.keys(users[currentUser]['answers']).includes(id))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        answered: Object.keys(questions)
            .filter(id => Object.keys(users[currentUser]['answers']).includes(id))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    }
}

export default connect(mapStateToProps)(Home);