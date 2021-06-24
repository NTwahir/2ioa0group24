import React from 'react';
import footerLogo from './footer.png';
import CSS from './CSS/FooterImage.module.css';

const { footer } = CSS;


const FooterImage = () => {
    return (
        <div>
            <img classname={footer} src={footerLogo} alt="CSVIZ Logo"/>
        </div>
    )
}

export default FooterImage;
