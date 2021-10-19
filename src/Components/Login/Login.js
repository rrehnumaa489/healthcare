import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth'; 


const Login = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div>
            <h1 className="mt-5">Please Login</h1>
                <Button className="m-5" onClick={signInUsingGoogle} variant="primary">Login With Google</Button> 
                <span>Or</span>
                <Link to="register"><Button className="m-5" variant="primary">Register</Button></Link>
                
        </div>
    );
};

export default Login;