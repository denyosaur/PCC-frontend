import React, { useEffect } from "react";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import NavbarBurger from './NavbarBurger';

import logo from "./logo.png";

import './../../css/navigation/NavbarComponent.css';

const NavbarComponent = ({ openMobileMenu, setOpenMobileMenu }) => {

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                document.querySelector(".NavbarComponent").classList.add("scrolled");
            } else if (window.scrollY < 1) {
                document.querySelector(".NavbarComponent").classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="NavbarComponent">
            <Navbar expand="md" sticky="top" >
                <Container >
                    <div className="brand-text">
                        <Navbar.Brand href="/">
                            <img src={logo} alt="logo" className="Navbar-logo" />
                            <span className="Navbar-brand-text">Pacific Coast Counsel</span>
                        </Navbar.Brand>
                    </div>
                    <Nav className="Navbar-navigation justify-content-end">
                        <Nav.Link href="/about" className="navitem"><span className="Navbar-link-text">About Us</span></Nav.Link>
                        <Nav.Link href="/services" className="navitem"><span className="Navbar-link-text">Services</span></Nav.Link>
                        <Nav.Link href="/contact" className="navitem"><span className="Navbar-link-text">Contact Us</span></Nav.Link>
                    </Nav>
                    <NavbarBurger openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
                </Container>
            </Navbar>
        </header>)
};

export default NavbarComponent;