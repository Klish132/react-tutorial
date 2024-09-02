import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {AuthContext} from "../context";

const AppRouter = () => {
    const { isLoggedIn } = useContext(AuthContext) || {};
    return (
        <Routes>
            {
                isLoggedIn
                    ? privateRoutes.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
                    : publicRoutes.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
            }
        </Routes>
    );
};

export default AppRouter;