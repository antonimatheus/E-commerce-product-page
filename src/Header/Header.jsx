import React from "react";
import "./Header.css"
import Navbar from "./NavBar/NavBar";

function Header(props) {
    return (
        <div className="Header--container">
            <Navbar 
                quantity={props.quantity}
                setQuantity={props.setQuantity}
                cartShop={props.cartShop}
                setCartShop={props.setCartShop}
            />
        </div>
    )
}

export default Header;