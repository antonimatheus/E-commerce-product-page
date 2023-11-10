import React, { useState } from "react";

import image_product from "../../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "../../assets/images/icon-delete.svg";

function Cart(props) {

    const [cart, setCart] = useState(false)

    const showCart = () => {
        setCart(!cart)
    }

    const recycle = () => {
        props.setCartShop(false)
    }
    
    return (
        <div className="Cart--container">
            {props.cartShop && (<span className="NavBarCart--notification">{props.quantity}</span>)}
            
            {cart ? 
                <i class="fa-solid fa-cart-shopping" onClick={showCart}></i> : 
                <div className="NavBar--shoppingCart">
                    <i class="fa-solid fa-cart-shopping" onClick={showCart}></i>
                </div>
            }
            
            {cart && (
                <div className="Cart--block">
                    <div className="Cart--title">
                        <h4>
                            Cart
                        </h4>
                    </div>

                    {props.cartShop === true ? (
                    <div className="Cart--content">
                            <div className="Cart--contentBlock">
                                <div className="Cart--contentImg">
                                    <img src={image_product} alt="image product" />
                                </div>
                                <div className="Cart--contentValue">
                                    <div>Fall Limited Edition Sneakers</div>
                                    <div><p>$125.00 x {props.quantity} <span className="Cart--contentValueTotal">$
                                    {props.quantity * 125}.00</span></p></div>
                                </div>
                                <div className="Cart--contentDelete">
                                    <img src={iconDelete} alt="delete" onClick={recycle} />
                                </div>
                            </div>
                            <div className="Cart--contentCheckout">
                                <button>Checkout</button>
                            </div>
                    </div>
                    ) : 
                    <div className="Cart--content">
                        <p>Your cart is empty.</p>
                    </div>
                }
                </div>
            )}
        </div>
    )
}

export default Cart;