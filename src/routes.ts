import About from "./pages/About";
import {Posts} from "./pages/Posts";
import {PostPage} from "./pages/PostPage";
import {RouteProps} from "react-router-dom";

export const routes : RouteProps[] = [
    {path: '/about', element: <About /> },
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostPage},
]