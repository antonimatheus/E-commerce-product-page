import React from "react";

import icon_plus from "../assets/images/icon-plus.svg"
import icon_minus from "../assets/images/icon-minus.svg"
import ButtonSubmit from "../Header/NavBar/ButtonSubmit";

function MainCart(props) {
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
                            <img src={icon_minus} alt="icon minus" onClick={props.handleChangeMinus} />
                        </div>
                        
                        <div className="Main--numberQuantity">
                            {props.quantity}
                        </div>
                        <div className="Main--iconPlus">
                            <img src={icon_plus} alt="icon plus" onClick={props.handleChangePlus} />
                        </div>
                    </div>

                <ButtonSubmit 
                    handleClick={props.handleClick}
                    quantity={props.quantity} 
                    tempQuantity={props.tempQuantity}
                    setTempQuantity={props.setTempQuantity}
                />
                </div>
            </div>
        </div>
    )
}



export default MainCart;