import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ImageBanner from "../../public/brandon-mbemba-high-resolution-logo-transparent.png";
import { FaBars } from 'react-icons/fa'; // Icône pour le menu hamburger
import Modal from "./Modal";

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div className="header">
            <img src= {ImageBanner} alt="Logo de Brandon M'bemba" className="header-logo"/>

            {/* Menu Hamburger pour les mobiles */}
            <div className="mobile-menu-icon" onClick={toggleModal}>
                <FaBars />
            </div>

            <nav className="desktop-nav">
                <ul>
                    <NavLink to="/" className={({isActive}) => (isActive ? "underline" : "")}>
                        <li>Mon travail</li>
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) => (isActive ? "underline" : "")}>
                        <li>A propos de moi</li>
                    </NavLink>
                    <NavLink to="/Contact" className={({isActive}) => (isActive ? "underline" : "")}>
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </nav>
            {/* Utilisation du composant Modal pour le menu mobile */}
            <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
                <ul>
                    <NavLink to="/" onClick={toggleModal} className={({isActive}) => (isActive ? "underline" : "")}>
                        <li>Mon travail</li>
                    </NavLink>
                    <NavLink to="/about" onClick={toggleModal} className={({isActive}) => (isActive ? "underline" : "")}>
                        <li>À propos de moi</li>
                    </NavLink>
                    <NavLink to="/contact" onClick={toggleModal} className={({isActive}) => (isActive ? "underline" : "")}>
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </Modal>
        </div>
    );  
};

export default Header;