import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import Logo from '../images/cryptologo.png'
import Identicon from 'identicon.js';
// import TokenExchange from '../pages/exchange/tokenExchange';
// import Keys from './keyCount';
import './style.css';

export default function NavBar(props) {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="logo" href="#home">
                    <img src={Logo} alt="Logo" width="100px" />
                    <h1>React-Crypto</h1>
                    <NavItem>
                        {props.account}
                    </NavItem>
                    <NavItem>
                        {
                            props.accounnt
                                ? <img
                                    className="ml-2"
                                    width="30"
                                    height="30"
                                    src={`data:image/png;base64,${new Identicon(props.account, 30).toString()}`}
                                    alt=''
                                />
                                : <span></span>
                        }
                    </NavItem>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=" nav-content justify-content-end">
                    <NavItem>
                        <a href="/">Home</a>
                    </NavItem>
                    <NavItem>
                        <a href="/tokenexchange">Exchange</a>
                    </NavItem>
                    {/* <Keys /> */}
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}