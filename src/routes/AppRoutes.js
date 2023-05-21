/*
This file defines the actual routes used throughout the project.
*/
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import { routes } from '../constant/stirng';
import Login from '../pages/Login';
import NoPageFound from '../pages/NoPageFound';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Product from '../pages/roduct';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact element={<ProtectedRoutes />}>
                <Route exact path={routes.Cart} element={<Cart />} /> 

            </Route>
            <Route exact path={routes.About} element={< About/>} />
            <Route exact path={routes.Contact} element={<Contact />} />

            <Route exact path={routes.Product} element={<Product/>} />
            <Route exact path={routes.Home} element={<Home />} />
            <Route exact path={routes.Login} element={<Login />} />

            <Route path="*" element={<NoPageFound />} />
        </Routes>
    );
};

export default AppRoutes;
