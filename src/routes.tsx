import {About} from "./pages/About";
import {Posts} from "./pages/Posts";
import {PostPage} from "./pages/PostPage";
import {Error} from "./pages/Error";
import React from "react";
import {Login} from "./pages/Login";
import {Navigate} from "react-router-dom";

export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: "*", element: <Navigate to={"/login"} replace/>}
]

export const privateRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostPage/>},
    {path: '/error', element: <Error/>},
    {path: "*", element: <Navigate to={"/posts"} replace/>}
]