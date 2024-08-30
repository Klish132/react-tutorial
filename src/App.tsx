import "./styles/app.css"
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import AppRouter from "./components/AppRouter";

export function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}