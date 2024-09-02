import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/authContext";
import {Button} from "../button/Button";
import styles from "./Navbar.module.css"

export const Navbar = () => {
    const { logout } = useContext(AuthContext) || {};

    return (
        <div className={styles.navbar}>
            <Button onClick={() => logout!()}>Logout</Button>
            <div className={styles.navbarLinks}>
                <Link to={"/posts"}>Posts</Link>
                <Link to={"/about"}>About</Link>
            </div>
        </div>
    );
};