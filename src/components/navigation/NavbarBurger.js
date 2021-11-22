import React, { useEffect } from "react";

import './../../css/navigation/NavbarBurger.css';

const NavbarBurger = ({ openMobileMenu, setOpenMobileMenu }) => {
    const changeBurgerOnClickHandler = () => {
        document.querySelector(".NavbarBurger").classList.toggle("change");
        setOpenMobileMenu(!openMobileMenu);
    };

    useEffect(() => {
        const NavbarBurgerSelector = document.querySelector(".NavbarBurger");
        if (!openMobileMenu) {
            NavbarBurgerSelector.classList.remove("change");
        } else {
            NavbarBurgerSelector.classList.add("change");
        };

    }, [openMobileMenu]);

    return (
        <div className="NavbarBurger" onClick={changeBurgerOnClickHandler}>
            <div className="NavbarBurger-burger" >
                <div className="NavbarBurger-bar1"></div>
                <div className="NavbarBurger-bar2"></div>
                <div className="NavbarBurger-bar3"></div>
            </div>
        </div>);
};

export default NavbarBurger;