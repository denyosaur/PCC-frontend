import React from "react";
import Video from "./sanfrancisco.mp4";

import './../../css/homepage/HomepageBackground.css';

const HomepageBackground = () => {

    return (
        <div className="HomepageBackground">
            <video className="videoTag" autoPlay loop muted>
                <source src={Video} type="video/mp4" />
            </video>
        </div>)
};

export default HomepageBackground;