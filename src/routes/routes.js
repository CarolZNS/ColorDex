import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../views/Home';

const Routers = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/'/>
        </Routes>
    );
};

export default Routers;