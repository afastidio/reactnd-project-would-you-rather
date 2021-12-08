import React, { useState } from 'react';
import { connect } from 'react-redux';
import Tab from './Tab';

const Home = ({ unanswered, answered }) => {
    const [selectedTab, setSelectedTab] = useState(1);

    return (
        <div className="flex flex-col items-center w-full">
            <ul className="flex flex-row justify-evenly border border-blue-400 rounded-lg h-8 w-1/2">
                <li
                    className={`${selectedTab === 1 ? 'bg-blue-400 text-white' : 'bg-white text-blue-400'} w-1/2 text-center rounded-l-lg cursor-pointer`}
                    onClick={() => setSelectedTab(1)}
                >
                    Unanswered
                </li>
                <li
                    className={`${selectedTab === 2 ? 'bg-blue-400 text-white' : 'bg-white text-blue-400'} w-1/2 text-center rounded-r-lg cursor-pointer`}
                    onClick={() => setSelectedTab(2)}
                >
                    Answered
                </li>
            </ul>
            <ul className="w-1/3">
                {selectedTab === 1 ? <Tab questions={unanswered} /> : <Tab questions={answered} />}
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