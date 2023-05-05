import React from "react";
import logo from "../assets/images/3minglogo.png";

const Carousel = () => {
    return (
        <div className="py-2 bg-custom">
            <div className="container px-3 px-lg-5 mt-2">
                <div className="text-center text-white">
                    <img src={logo} className="img-fluid logo-img h-100 w-34" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Carousel;