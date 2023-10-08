import React from "react";
import "./Header.css"
import Navbar from "./NavBar/NavBar";

function Header() {
    return (
        <div className="Header--container">
            <Navbar />
            <h1>Header</h1>
        </div>
    )
}

export default Header;