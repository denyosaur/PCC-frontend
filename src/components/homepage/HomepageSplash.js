import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import HomepageBackground from "./HomepageBackground";

import './../../css/homepage/HomepageSplash.css';

const HomepageSplash = () => {

    return (
        <div className="HomepageSplash">
            <HomepageBackground />
            <Container>
                <div className="HomepageSplash-text">
                    <Row xs={12} md={8} lg={9} className="justify-content-md-end">
                        <Col>
                            <h1 className="HomepageSplash-header">Chris H. Wong</h1>
                        </Col>
                    </Row>
                    <Row xs={12} md={8} lg={7} className="justify-content-md-end">
                        <Col>
                            <h2 className="HomepageSplash-info">Practicing Attorney in the Greater San Francisco Bay Area</h2>
                        </Col>
                    </Row>
                    <Row xs={12} md={8} lg={7} className="justify-content-md-end">
                        <Col>
                            <p className="HomepageSplash-specialty">Full service litigator in matters of unlawful detaining, employment discrimination, breach of contract, and arbitration matters</p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap');
            </style>
        </div>)
};

export default HomepageSplash;