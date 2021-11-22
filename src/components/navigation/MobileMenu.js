import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import './../../css/navigation/MobileMenu.css';

const MobileMenu = ({ openMobileMenu, setOpenMobileMenu }) => {
    const closeMenuHandler = () => {
        setOpenMobileMenu(!openMobileMenu);
    };

    useEffect(() => {
        const mobileMenuClassName = document.querySelector(".MobileMenu");
        if (openMobileMenu) {
            mobileMenuClassName.classList.add("reveal-mobile-menu");
            mobileMenuClassName.style.width = "100%";
            document.body.style.overflow = "hidden";
        } else {
            mobileMenuClassName.classList.remove("reveal-mobile-menu");
            mobileMenuClassName.style.width = "0%";
            document.body.style.overflow = "scroll";

        };

    }, [openMobileMenu]);

    return (
        <div className="MobileMenu">
            <ul className="MobileMenu-list">
                <li className="MobileMenu-item">
                    <Link to="/" onClick={closeMenuHandler} >Home</Link>
                </li>
                <li className="MobileMenu-item">
                    <Link to="/about" onClick={closeMenuHandler}>About Us</Link>
                </li>
                <li className="MobileMenu-item">
                    <Link to="/services" onClick={closeMenuHandler}>Services</Link>
                </li>
                <li className="MobileMenu-item">
                    <Link to="/contact" onClick={closeMenuHandler}>Contact Us</Link>
                </li>
            </ul>
        </div>)
};

export default MobileMenu;