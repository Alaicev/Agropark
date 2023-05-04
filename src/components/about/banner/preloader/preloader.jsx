import React from "react";
import "./preloader.css"
import logo from "./../../../../assets/image/logo.png"

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={logo} alt=""/>
        </div>
    )
}

export default Preloader