
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuestionCard extends Component {
    render() {
        const { id, author, authorAvatar, optionOne } = this.props;

        return (
            <div
                className="rounded-lg my-4 p-4 w-full"
                style={{ boxShadow: "0 3px 10px #d3d3d3" }}
            >
                <div className="flex flex-row">
                    <div
                        className="rounded-full h-20 w-20 mr-4"
                        style={{
                            backgroundImage: `url('${authorAvatar}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }}
                    >
                    </div>
                    <div>
                        <p className="uppercase text-gray-500 text-xs">{author} asks</p>
                        <p className="font-bold text-lg">Would you rather</p>
                        <p>{optionOne} <span className="font-bold">OR...</span></p>
                    </div>
                </div>

                <div className="text-right">
                    <Link to={`/questions/${id}`} className="text-blue-400 text-sm">View complete question</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id];
    const authorId = question['author'];
    const author = users[authorId];
    return ({
        author: author['name'],
        authorAvatar: author['avatarURL'],
        optionOne: question['optionOne']['text']
    })
}

export default connect(mapStateToProps)(QuestionCard);