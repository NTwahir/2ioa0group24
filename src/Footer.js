import React from 'react';
import { Site } from "tabler-react";
import FooterImage from './FooterImage.js';



const Footer = () => {
    return (
        <div>
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
