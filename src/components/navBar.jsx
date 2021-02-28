import React from 'react';
import { Button, Form, Navbar, Nav, FormControl, NavDropdown } from 'react-bootstrap';
import Logo from '../images/cryptologo.png'
import Keys from './keyCount';
import './style.css';

export default function NavBar() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="logo" href="#home">
                    <img src={Logo} alt="Logo" width="100px" />
                    <h1>React-Crypto</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=" nav-content justify-content-end">
                    {/* <Keys /> */}
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}