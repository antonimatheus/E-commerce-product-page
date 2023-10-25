import React, { useState } from "react";

import icon_plus from "../assets/images/icon-plus.svg"
import icon_minus from "../assets/images/icon-minus.svg"
import NavBar from "../Header/NavBar/NavBar";
import Cart from "../Header/NavBar/Cart";

function MainCart() {

    const [quantity, setQuantity] = useState(0)

    function handleChangePlus() {
        setQuantity(quantity + 1)
    }

    function handleChangeMinus() {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const [cartShop, setCartShop] = useState(false)
    const handleClick = () => {
        setCartShop(!cartShop)
    }

    function mostrar(e) {
        e.preventDefault()
        if(quantity) {
            handleClick()
        }
    }

    



    
    

    return (
        <div className="Main--block2">
            <div className="Main--subBlock2">
                <div className="Main--subTitle">
                    <h3>
                        Sneaker Company
                    </h3>
                </div>
                <div className="Main--title">
                    <h1>
                        Fall Limited Edition Sneakers
                    </h1>
                </div>
                <div className="Main--text">
                    <p>
                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                </div>
                <div className="Main--price">
                    <div className="Main--priceValue">
                        $125.00 <span className="Main--priceDiscount">50%</span>
                    </div>
                    <div className="Main--priceOffer">
                        $250.00
                    </div>
                </div>

                <div className="Main--quantity">
                    <div className="Main--quantityBlock1">
                        <div className="Main--iconMinus">
                            <img src={icon_minus} alt="icon minus" onClick={handleChangeMinus} />
                        </div>
                        
                        <div className="Main--numberQuantity">
                            {quantity}
                        </div>
                        <div className="Main--iconPlus">
                            <img src={icon_plus} alt="icon plus" onClick={handleChangePlus} />
                        </div>
                    </div>

                    <div className="Main--button">
                        <button onClick={mostrar}><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                    </div>
                </div>
                    <NavBar 
                    cartShop={cartShop}
                    quantity={quantity}
                    />
                    <Cart quantity={quantity}/>
            </div>
        </div>
    )
}



export default MainCart;