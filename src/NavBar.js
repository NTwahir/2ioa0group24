import React from 'react';
import CSS from './NavBar.module.css';
import { Nav, Icon } from "tabler-react";

<Icon prefix="fa" name="user" />;
const { navbar } = CSS;

const NavBar = () => {
    return (
        <div className={navbar}>
                <Nav>
                    <Nav.Item to="/" value="2IOAO Visualization Tool" icon="home" />
                    <Nav.Item to="/About" value="About Us" icon="globe" />
                    <Nav.Item to="/Visualizations" value="Visualizations" icon="star" />
                    <Nav.Item to="https://github.com/NTwahir/2ioa0group24" value="GitHub" icon="github" />
                </Nav>
        </div>
    )
}




export default NavBar;
