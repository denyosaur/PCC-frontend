import React from "react";

import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


const TestimonialItem = ({ title, testimonial, name, location, image }) => {

    return (
        <div className="TestimonialItem">
            <Carousel.Item>
                <Row>
                    <Col className="TestimonialItem-text">
                        <Row>
                            <Col className="TestimonialItem-title">
                                <h4>{title}</h4>
                            </Col>
                            <Col className="TestimonialItem-testimonial">
                                <p>{testimonial}</p>
                            </Col>
                            <Col className="TestimonialItem-name">
                                <span>{name} from {location}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="TestimonialItem-image">
                        <img src={image} alt="lawyer" />
                    </Col>
                </Row>
            </Carousel.Item>
        </div>)
};

export default TestimonialItem;