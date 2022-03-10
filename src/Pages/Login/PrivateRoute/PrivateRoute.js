import React from 'react'
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export default function PrivateRoute({ children, ...rest }) {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <Spinner style={{textAlign: 'center'}} animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
                render={({ location }) =>
                    user.email ? (
                    children
                    ) : (
                    <Redirect
                        to={{
                        pathname: "/login",
                        state: { from: location }
                        }}
                    />
                    )
            }
        />
    );
}
