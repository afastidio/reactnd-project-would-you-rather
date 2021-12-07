import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
    render() {
        const { loggedIn, component: RouteComponent} = this.props;

        return (
            <>
                {!loggedIn ? 
                    <Navigate to="/" />
                    : <RouteComponent />
                }
            </>
        )
    }

}

function mapStateToProps({ currentUser }) {
    return {
        loggedIn: currentUser != null
    }
}

export default connect(mapStateToProps)(PrivateRoute);