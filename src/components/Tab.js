import React, { Component } from 'react';
import QuestionCard from './QuestionCard';

class Tab extends Component {
    render() {
        const { questions } = this.props;

        return (
            <>
                {
                    questions.map(id => (
                        <li key={id}>
                            <QuestionCard id={id}/>
                        </li>
                    ))
                }
            </>
        )
    }
}

export default Tab;