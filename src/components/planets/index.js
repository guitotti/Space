import { React, useEffect, useState } from "react";
import Planet from "./planet";
import Form from "./form/index";

async function getPlanets(){
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json();
    return data;
}

const Planets = () => {
    const [planets, setPlanets] = useState([]);

    //roda tanto no componentDidMount quanto no componentDidUpdate (update roda sempre que o estado é atualizado)
    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets']);
        })
    }, []);
    
    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet]);
    }

    return (
        <>
            <h3>Planet List</h3>
            <hr/>
            <Form addPlanet={addPlanet}/>
            <hr />
            <hr />
            {planets.map((planet, index) => 
                <Planet 
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    key={index}
                />
            )}
        </>
    );
}

export default Planets;