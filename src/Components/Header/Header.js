import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import Button from 'react-bootstrap/Button';
import { HashLink } from 'react-router-hash-link'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Planex</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="primary">Logout</Button>: 
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>

                        }
                         <Nav.Link as={HashLink} to="/register">Register</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;