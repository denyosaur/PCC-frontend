import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./homepage/Homepage";
import About from "./about/About";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import NotFound from "./navigation/NotFound";

const SiteRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<NotFound />} />
        </Routes>
    )
};

export default SiteRoutes;