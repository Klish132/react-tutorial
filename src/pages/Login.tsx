import React, {useContext} from 'react';
import {Input} from "../components/input/Input";
import {Button} from "../components/button/Button";
import {AuthContext} from "../context/authContext";

export const Login = () => {
    const { login } = useContext(AuthContext) || {};

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={e => {
                e.preventDefault();
                login!()
            }}>
                <Input type="test" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Button>Login</Button>
            </form>
        </div>
    );
};