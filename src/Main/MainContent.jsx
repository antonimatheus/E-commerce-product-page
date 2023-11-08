import React from "react";
import './MainContent.css'
import MainImg from "./MainImg";
import MainCart from "./MainCart";

function MainContent(props) {

    return (
        <div className="Main--container">
            <MainImg />
            <MainCart 
                quantity={props.quantity}
                setQuantity={props.setQuantity}
                cartShop={props.cartShop}
                setCartShop={props.setCartShop}
                handleChangePlus={props.handleChangePlus}
                handleChangeMinus={props.handleChangeMinus}
                handleClick={props.handleClick}
                mostrar={props.mostrar}
            />
        </div>
    )
}

export default MainContent;