import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaFileContract } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
                <a 
                    href='https://www.linkedin.com/in/brandon-m-40394925a/' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    aria-label="LinkedIn - Brandon M'Bemba"
                >
                    <FaLinkedin/>
                </a>
                <a
                    href='https://acrobat.adobe.com/id/urn:aaid:sc:EU:143094eb-d132-431a-90e3-9bd578b1ded8'
                    target='_blank' 
                    rel='noopener noreferrer'
                    aria-label="CV - Brandon M'Bemba"
                >
                    <FaFileContract/>
                </a>
                <a
                    href='https://github.com/BrandonMbemba'
                    target='_blank' 
                    rel='noopener noreferrer'
                    aria-label="GitHub - Brandon M'Bemba"
                >
                    <FaGithub/>
                </a>
                <p>© 2024 Brandon M'bemba. Tous droits réservés</p>
        </div>
    );
};

export default Footer;