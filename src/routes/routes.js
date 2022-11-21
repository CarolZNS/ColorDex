import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../views/Home';
import Single from '../views/Single';

const Routers = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/'/>
            <Route element={<Single />} path='/pokemon/:id'/>
        </Routes>
    );
};

export default Routers;