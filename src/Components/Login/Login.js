import React from 'react';
import Button from 'react-bootstrap/Button';
import useAuth from '../Hooks/UseAuth'; 
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap';


const Login = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div>
            <h1 className="mt-5">Please Login</h1>
                <Button className="m-5" onClick={signInUsingGoogle} variant="primary">Login With Google</Button> 
        </div>
    );
};

export default Login;