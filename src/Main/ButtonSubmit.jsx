import React from "react";

function ButtonSubmit(props) {

    return (
        <div className="Main--button">
            <button onClick={props.mostrar}><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
        </div>
    )
}

export default ButtonSubmit;