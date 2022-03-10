import React, { useState } from 'react'
import { Container, NavLink, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css'

export default function Register() {
    const {signInUsingGoogle} = useAuth();

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container >
            <div className="text-center">
                <h2>Please Register</h2>
                { !isLoading && <form onSubmit={handleLoginSubmit} style={{width: '50%', margin:' auto'}}>
                    <div className="mb-3">
                        <input type="text" className="form-control"
                        name="name"
                        onBlur={handleOnBlur}
                        aria-describedby="emailHelp"  placeholder="Your Name"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control"
                        name="email"
                        onBlur={handleOnBlur}
                        aria-describedby="emailHelp"  placeholder="Your Email"/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control"
                        name="password"
                        onBlur={handleOnBlur}
                        placeholder="Password"/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control"
                        name="password2"
                        onBlur={handleOnBlur}
                        placeholder="ReType Your Password"/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">SignUp</button>
                    <br />
                    <NavLink style={{textDecoration: 'none'}} to="/login">Have an Account? Login
                    </NavLink>
                </form>}
                {isLoading && <Spinner animation="border" variant="info" />}
                {user?.email && <div className="alert alert-success" role="alert">
                User Created Successfully!
                </div>}
                {authError && <div className="alert alert-danger" role="alert">
                {authError}
                </div>}
                <div onClick={signInUsingGoogle} className="btn link2 mt-3">Google Sign In</div>
            </div>
            
        </Container>
    );
}
