import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './../../css/navigation/MobileMenu.css';

const MobileMenu = ({ openMobileMenu }) => {
    useEffect(() => {

        if (openMobileMenu) {
            document.querySelector(".MobileMenu").classList.add("reveal-mobile-menu");
        } else {
            document.querySelector(".MobileMenu").classList.remove("reveal-mobile-menu");
        };

    }, [openMobileMenu]);

    return (
        <div className="MobileMenu">
            <ul className="MobileMenu-list">
                <li className="MobileMenu-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="MobileMenu-item">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="MobileMenu-item">
                    <Link to="/services">Services</Link>
                </li>
                <li className="MobileMenu-item">
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </div>)
};

export default MobileMenu;