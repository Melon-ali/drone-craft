import React, { useState } from 'react'
import { Container, NavLink, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

export default function Login() {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, signInUsingGoogle,  authError} = useAuth();

    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleSignInUsingGoogle = () => {
        signInUsingGoogle();
        history.push(redirect_uri);

    }
    return (
        <Container >
            <div className="text-center">
                <h2>Please Login</h2>
                <form onSubmit={handleLoginSubmit} style={{width: '50%', margin:' auto'}}>
                    <div className="mb-3">
                        <input type="email" className="form-control"
                        onBlur={handleOnChange}
                        aria-describedby="emailHelp"  placeholder="Type Your Email"/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control"
                        onBlur={handleOnChange}
                        placeholder="Type Your Password"/>
                    </div>
                    
                    <button type="submit" className="btn link">Login</button>
                    <br />
                    <NavLink style={{textDecoration: 'none'}} to="/register">Need Account? Signup</NavLink>

                    {isLoading && <Spinner animation="border" variant="info" />}
                    {user?.email && <div className="alert alert-success" role="alert">
                    User Created Successfully!
                    </div>}
                    {authError && <div className="alert alert-danger" role="alert">
                    {authError}
                    </div>}
                </form>
                <div onClick={handleSignInUsingGoogle} className="btn link mt-3">Google Sign In</div>
            </div>
            
        </Container>
    )
}
