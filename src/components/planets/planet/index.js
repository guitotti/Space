import { React } from "react";
import GrayImg from "../shared/gray_img";
import DescriptionWithLink from "../description";

import { Link } from 'react-router-dom';

const Planet = (props) => {

    let title = <h4>{props.name}</h4>

    return (
        <div>
            <Link to={`/planet/${props.id}`}>{title}</Link>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url}/>
        </div>
    );
}

export default Planet;