import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Posts} from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import {PostPage} from "../pages/PostPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/posts" element={ <Posts/> }/>
            <Route path="/posts/:id" element={ <PostPage/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/error" element={ <Error/> }/>
            <Route path="*" element={<Navigate to={"/error"} replace /> } />
        </Routes>
    );
};

export default AppRouter;