import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1>Brandon M'bemba</h1>
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