import React from "react";
import "./NavBar.css"

import Burger from "./Burger"
import Cart from "./Cart";

import logo from "../../assets/images/logo.svg"
import profile_picture from "../../assets/images/image-avatar.png"

function NavBar(props) {

    return (
        <div className="NavBar--container">
            <div className="NavBar--block1">
                <Burger />
                <div className="NavBar--logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="NavBar--ul">
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            
            <div className="NavBar--block2">
                <Cart 
                    quantity={props.quantity}
                    setQuantity={props.setQuantity}
                    cartShop={props.cartShop}
                    setCartShop={props.setCartShop}
                    handleClick={props.handleClick}
                />
                <div className="NavBar--profile">
                    <img src={profile_picture} alt="profile picture" />
                </div>
            </div>
        </div>
    )
}

export default NavBar;