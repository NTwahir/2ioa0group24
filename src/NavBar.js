import React from 'react';
import { Link } from 'react-router-dom';
import CSS from './NavBar.module.css';

const { navbar } = CSS;

const NavBar = () => {
    return (
        <div className={navbar}>
                <Link to="/" activeClassName="active">2IOAO Visualization Tool</Link>
                <Link to="/" style={{float: 'right'}}>Home</Link>
                <Link to="/visualizations" style={{float: 'right'}}>Visualizations</Link>
                <Link to="/about" style={{float: 'right'}}>About Us</Link>
        </div>
    )
}

export default NavBar;
