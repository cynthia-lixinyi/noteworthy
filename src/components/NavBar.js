import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/noteworthy-bear-logo.png';

import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="leftSide">
                <a href="/">
                    <img src={logo} alt="logo" width="100" />
                </a>
            </div>
            <div className="rightSide">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/demo">Demo</Link></li>
                <li><Link to="/members">Members</Link></li>
            </ul>
            </div>
        </div>
    )

};

export default NavBar;