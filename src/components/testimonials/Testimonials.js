import React from "react";

import TestimonialItem from './TestimonialItem';

import './../../css/testimonials/Testimonials.css';

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

            <div className="Testimonials-carousel">
                <TestimonialItem test={test} />
            </div>
        </div>)
};

export default Testimonials;