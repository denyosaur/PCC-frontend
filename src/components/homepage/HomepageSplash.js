import React from "react";

import HomepageBackground from "./HomepageBackground";

import './../../css/homepage/HomepageSplash.css';

const HomepageSplash = () => {

    return (
        <div className="HomepageSplash">
            <HomepageBackground />
            <div className="HomepageSplash-text">
                <div className="HomepageSplash-header">
                    <h1>Chris H. Wong</h1>
                </div>
                <div className="HomepageSplash-info">
                    <h2>Practicing Attorney in the Greater San Francisco Bay Area</h2>
                </div>
                <div className="HomepageSplash-specialty">
                    <p>Full service litigator in matters of unlawful detaining, employment discrimination, breach of contract, and arbitration matters</p>
                </div>
            </div>

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap');
            </style>
        </div>)
};

export default HomepageSplash;