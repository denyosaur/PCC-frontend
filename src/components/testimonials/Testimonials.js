import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import TestimonialItem from './TestimonialItem';

import lawyer3 from "./images/lawyer3.jpg";

const Testimonials = () => {
    //API call to get testimonials
    //loop over return result to create items and put in carousel
    //pass in testimonials info to each individual testimonial item

    const test = {
        title: "I highly recommend Chris Huechi Wong",
        testimonial: "I hired Chris for an employee/business lawsuit where he represented my company in court. I had the utmost confidence in him during our trial and we were well prepared. We won our case and it was swift and painless. He has thorough knowledge of the law and I refer him to my friends and family for business law.",
        name: "J. Davis",
        location: "Oakland, CA",
        image: lawyer3
    }
    return (
        <div className="Testimonials">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>)
};

export default Testimonials;