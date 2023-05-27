import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../Assets/logo.png'
const Header = () => {
    return (
        <Navbar sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/">{
                    <img src={logo} alt="" />
                }</Navbar.Brand>
                <Nav className="me-right">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/features'>Features</NavLink>
                    <NavLink to='/price'>Price</NavLink>
                </Nav>
            </Container>
        </Navbar>
        
    );
};

export default Header;