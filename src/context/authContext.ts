﻿import {createContext} from "react";

type AuthContextProps = {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextProps | null>(null);