import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/authContext";
import Button from "../button/Button";

export const Navbar = () => {
    const { logout } = useContext(AuthContext) || {};

    return (
        <div className="navbar">
            <Button onClick={() => logout!()}>Logout</Button>
            <div className="navbar__links">
                <Link to={"/posts"}>Posts</Link>
                <Link to={"/about"}>About</Link>
            </div>
        </div>
    );
};