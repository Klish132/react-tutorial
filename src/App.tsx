import "./styles/app.css"
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import { useLocalStorage } from "@uidotdev/usehooks";

export function App() {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false)

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn ?? false,
                login: () => setIsLoggedIn(true),
                logout: () => setIsLoggedIn(false)
            }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}