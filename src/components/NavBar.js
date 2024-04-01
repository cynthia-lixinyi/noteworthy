import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About us
                    </Link>
                </li>
                <li>
                    <Link to="/demo">
                        Demo
                    </Link>
                </li>
                <li>
                    <Link to="/members">
                        Members
                    </Link>
                </li>
            </ul>
        </nav>
    )

};

export default NavBar;