import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/noteworthy-bear-logo.png';

import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="logo">
                <img src={logo} alt="logo" width="100" />
            </a>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/demo">Demo</Link></li>
                <li><Link to="/members">Members</Link></li>
            </ul>
        </nav>
    )

};

export default NavBar;