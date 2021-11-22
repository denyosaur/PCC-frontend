import React, { useState } from "react";

import './../../css/testimonials/TestimonialItem.css';

const TestimonialItem = ({ test }) => {
    const [hovered, setHovered] = useState(false);
    const { title, testimonial, name, location, image } = test;

    return (
        <div className="TestimonialItem"
            onMouseEnter={() => { setHovered(true) }}
            onMouseLeave={() => { setHovered(false) }}>
            <div className="TestimonialItem-text">
                <div className="TestimonialItem-title">
                    <h4>"{title}"</h4>
                </div>
                <div className="TestimonialItem-testimonial">
                    <p>{testimonial}</p>
                </div>
                <div className="TestimonialItem-name">
                    <span>{name} from {location}</span>
                </div>
            </div>
            <div className={hovered ? "TestimonialItem-background-image TestimonialItem-hovered" : "TestimonialItem-background-image"}>
                <img src={image} alt="lawyer" className="TestimonialItem-image" />
            </div>
        </div>)
};

export default TestimonialItem;