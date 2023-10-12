import React from "react";
import './MainContent.css'
import MainImg from "./MainImg";
import MainCart from "./MainCart";

function MainContent() {

    return (
        <div className="Main--container">
            <MainImg />
            <MainCart />
        </div>
    )
}

export default MainContent;