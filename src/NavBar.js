import React from 'react';
import { Link } from 'react-router-dom';
import CSS from './NavBar.module.css';

const { navbar } = CSS;

const NavBar = () => {
    return (
        <ul className={navbar}>
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
