import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ loggedIn, component: RouteComponent }) => {
    const location = useLocation();

    return (
        <>
            { !loggedIn ?
                <Navigate to="/" state={{ from: location }} />
                : <RouteComponent />
            }
        </>
    )
}

function mapStateToProps({ currentUser }) {
    return {
        loggedIn: currentUser != null
    }
}

export default connect(mapStateToProps)(PrivateRoute);