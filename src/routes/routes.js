import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../views/Home';
import UniqueCard from '../views/PokemonCard';

const Routers = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/'/>
            <Route element={<UniqueCard />} path='/pokemon/:id'/>
        </Routes>
    );
};

export default Routers;