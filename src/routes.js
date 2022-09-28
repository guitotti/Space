import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlanetsScreen from "./screens/planets";
import PlanetScreen from "./screens/planet";
import NotFoundScreen from "./screens/notFound";

const Rota = () => (
    <Router>
        <Routes>
            <Route exact path='/' element={<PlanetsScreen/>}/>
            <Route exact path='/planet/:id' element={<PlanetScreen/>}/>
            <Route path='*' element={<NotFoundScreen/>}/>
        </Routes>
    </Router>
);

export default Rota;