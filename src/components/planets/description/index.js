import React from "react";

const DescriptionWithLink = (props) => {
    return (
        <>
            <p>{props.description}</p>
            <p><a href={props.link}>{props.link}</a></p>
        </>
    );
}

export default DescriptionWithLink;