import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/visualizations">Visualizations</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
        </ul>
    )
}

export default NavBar;
