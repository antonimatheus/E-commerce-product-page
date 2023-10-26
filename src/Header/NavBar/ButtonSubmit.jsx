import React from "react";

function ButtonSubmit(props) {

    function mostrar() {
        if (props.quantity) {
            props.handleClick()      
        }
    }

    return (
        <div className="Main--button">
            <button onClick={mostrar}><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
        </div>
    )
}

export default ButtonSubmit;