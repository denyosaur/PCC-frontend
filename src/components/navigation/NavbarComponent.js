import React, { useEffect } from "react";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import NavbarBurger from './NavbarBurger';

import logo from "./logo.png";

import './../../css/navigation/NavbarComponent.css';

const NavbarComponent = ({ openMobileMenu, setOpenMobileMenu }) => {

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                document.querySelector(".navbar").classList.add("scrolled");
            } else {
                document.querySelector(".navbar").classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="NavbarComponent">
            <Navbar expand="md" collapseOnSelect sticky="top" fixed="top" className="fixed-top">
                <Container >
                    <Navbar.Brand href="/" className="Navbar-brand">
                        <img src={logo} alt="logo" className="Navbar-logo" />
                        <span className="Navbar-brand-text">Pacific Coast Counsel</span>
                    </Navbar.Brand>
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