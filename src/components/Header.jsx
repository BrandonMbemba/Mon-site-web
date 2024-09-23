import React from "react";
import { NavLink } from "react-router-dom";
import ImageBanner from "../../public/brandon-mbemba-high-resolution-logo-transparent.png";

const Header = () => {
    return (
        <div className="header">
            <img src= {ImageBanner} alt="Logo de Brandon M'bemba"/>
            <nav>
                <ul>
                    <NavLink to="/" className={({isActive}) => (isActive ? "underline" : "")}>
                        <li>Mon travail</li>
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) => (isActive ? "underline" : "")}>
                        <li>A propos de moi</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );  
};

export default Header;