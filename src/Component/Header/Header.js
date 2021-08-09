import React from 'react';
import './Header.css'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { usercontext } from '../../App';

const Header = () => {

    const [loggeduser,setloggeduser]=useContext(usercontext);

    return (
        <Navbar bg="dark" expand="lg" className="sticky-top">
        <Navbar.Brand  to="/" className="text-white sheba">Sheba XYZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto second-part">
                <Nav.Link  as={Link}   className="text-white" to="/home">Home</Nav.Link>
                <Nav.Link  as={Link} className="text-white" to="/order">Dashboard</Nav.Link>
                <Nav.Link  as={Link} className="text-white" to="/login">Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};

export default Header;