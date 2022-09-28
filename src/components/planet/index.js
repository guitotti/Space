import { React, useState, useEffect } from "react";
import GrayImg from "../planets/shared/gray_img";
import DescriptionWithLink from "../planets/description";
import Form from './form'; 
import { useParams, useNavigate, Navigate } from 'react-router-dom';

async function getPlanets(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}

const Planet = () => {
    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanet] = useState({});
    const [redirect, setRedirect] = useState(false);
    //extrair apenas o id do objeto que retorna do useParams()
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getPlanets(id).then(data => {
            setSatellites(data['satellites']);
            setPlanet(data['data']);
        }, error => {
            setRedirect(true);
        })
    }, [])

    const goToPlanets = () => {
        navigate('/');
    }

    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite]);
    }

    let title = <h4>{planet.name}</h4>

    if(redirect) 
        return <Navigate to="/"/> 

    return (
        <div>
            {title}
            <DescriptionWithLink description={planet.description} link={planet.link}/>
            <GrayImg img_url={planet.img_url}/>
            <h4>Satélites</h4>
            <hr/>
            <Form addSatellite={addSatellite}/>
            <hr/>
            <ul>
                {satellites.map((satellite, index) => 
                    <li key={index}>{satellite.name}</li>                
                )}
            </ul>
            <hr />
            <button type="button" onClick={goToPlanets}>Voltar ao início</button>
        </div>
    );
}

export default Planet;