import React, { useState } from "react";

import { Container } from 'react-bootstrap';

import NavbarComponent from "./navigation/NavbarComponent";
import MobileMenu from "./navigation/MobileMenu";

import Homepage from "./homepage/Homepage";
import Testimonials from "./testimonials/Testimonials";

import './../css/MainBody.css';

const MainBody = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <div className="MainBody">
            <NavbarComponent openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
            <Container>
                <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
                <section id="MainBody-homepage">
                    <Homepage />
                </section>
                <section id="MainBody-testimonials">
                    <Testimonials />
                </section>
            </Container>
        </div>)
};

export default MainBody;