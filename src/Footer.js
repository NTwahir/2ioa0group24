import React from 'react';
import { Site } from "tabler-react";
import FooterImage from './FooterImage.js';
import CSS from './CSS/FooterImage.module.css';

const { footerTab } = CSS;

const Footer = () => {
    return (
        <div className = { footerTab }>
            <Site>
                <Site.Footer 
                nav = {<FooterImage />}
                copyright = "Site created using React, D3 and the Tabler React UI." >
                </Site.Footer>
            </Site>
        </div>
    )
}

export default Footer;
