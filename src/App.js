import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import SiteRoutes from "./components/SiteRoutes";
import NavbarComponent from "./components/navigation/NavbarComponent";
import MobileMenu from "./components/navigation/MobileMenu";


import './App.css';

function App() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
        <MobileMenu openMobileMenu={openMobileMenu} />
        <Container fluid>
          <SiteRoutes />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
