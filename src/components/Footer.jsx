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
                >
                    <FaLinkedin/>
                    <p>Mon Linkedin</p>
                </a>
                <a
                    href='../../public/BrandonMbemba(Integrateur).pdf'
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <FaFileContract/>
                    <p>Mon CV</p>
                </a>
                <a
                    href='https://github.com/BrandonMbemba'
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <FaGithub/>
                    <p>Mon Github</p>
                </a>
                <p>© 2024 Brandon M'bemba. Tous droits réservés</p>
        </div>
    );
};

export default Footer;