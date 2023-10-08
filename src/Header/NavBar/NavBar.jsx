import React from "react";
import "./NavBar.css"

import logo from "../../assets/images/logo.svg"
import profile_picture from "../../assets/images/image-avatar.png"
import shopping_cart from "../../assets/images/shopping-cart.png"

function NavBar() {
    return (
        <div className="NavBar--container">
            <div className="NavBar--block1">
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
                <div className="NavBar--shoppingCart">
                    <img src={shopping_cart} alt="shopping cart" />
                </div>
                <div className="NavBar--profile">
                    <img src={profile_picture} alt="profile picture" />
                </div>
            </div>
        </div>
    )
}

export default NavBar;