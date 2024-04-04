import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/noteworthy-bear-logo.png';
import ReorderIcon from '@mui/icons-material/Reorder';

import '../styles/NavBar.css';

const NavBar = () => {

    const [displayLinks, setDisplayLinks] = useState(false);
    const toggleNavBar = () => {
        setDisplayLinks(!displayLinks);
    }

    return (
        <div className="navbar">
            <div className="leftSide">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/demo">Demo</Link>
                <Link to="/members">Members</Link>
                <button onClick={toggleNavBar}>
                    <ReorderIcon />
                    <div className="rightSideMenu" id={displayLinks ? "displayed" : "shrinked"}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/demo">Demo</Link>
                        <Link to="/members">Members</Link>
                    </div>
                </button>
            </div>
        </div>
    )

};

export default NavBar;