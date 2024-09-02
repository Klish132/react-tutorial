import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {AuthContext} from "../context/authContext";

export const AppRouter = () => {
    const {isLoggedIn} = useContext(AuthContext) || {};
    return (
        <Routes>
            {
                isLoggedIn
                    ? privateRoutes.map(route => <Route key={route.path} path={route.path} element={route.element}/>)
                    : publicRoutes.map(route => <Route key={route.path} path={route.path} element={route.element}/>)
            }
        </Routes>
    );
};