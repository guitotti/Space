import React from "react";
import './style.css'

const GrayImg = (props) => {
    return (
        <img className="gray-img"
             src={props.img_url}
             alt="Planet"/>
    );
}

export default GrayImg;