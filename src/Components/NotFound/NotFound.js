import React from 'react';
import notfound from '../../banner/404.jpg'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
const NotFound = () => {
    return (
        <div>
            <img className="mt-5 p-5" src={notfound} alt="" /> <br />
            <Link><Button  variant="primary">Go Back</Button></Link>
        </div>
    );
};

export default NotFound;