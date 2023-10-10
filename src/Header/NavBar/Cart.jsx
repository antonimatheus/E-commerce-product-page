import React, { useState } from "react";

function Cart() {

    const [cart, setCart] = useState(false)
    const showCart = () => {
        setCart(!cart)
    }
    return (
        <div className="Cart--container">
            <div className="NavBar--shoppingCart">
                <i class="fa-solid fa-cart-shopping" onClick={showCart}></i>
            </div>
            {cart && (
                <div className="Cart--block">
                    <div className="Cart--title">
                        <h4>
                            Cart
                        </h4>
                    </div>
                    <div className="Cart--content">
                        <p>Your cart is empty.</p>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default Cart;