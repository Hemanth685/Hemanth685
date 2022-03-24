import React, { useContext } from "react";
import './index.css'
import { ThemeContext } from "./ThemeContext";

const ThemeButton = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    const handleTheme = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("darkMode", !darkMode);
    }
    return (
        <div>
            <i className={darkMode ? "btn btn-floating fa fa-toggle-on" : "btn btn-floating fa fa-toggle-off"} onClick={handleTheme}   />
        </div>
    )
}

export default ThemeButton;