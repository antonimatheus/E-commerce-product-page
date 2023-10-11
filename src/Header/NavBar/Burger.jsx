import React, { useState } from "react";

import icon_menu from '../../assets/images/icon-menu.svg'
import icon_close from '../../assets/images/icon-close.svg'


function Burger() {
    const [burger, setBurger] = useState(false)
    const showLi = () => {
        setBurger(!burger)
    }

    return (
        <div className="Burger--container">
            <div className="Burger--icon">
                <img src={burger ? icon_close : icon_menu} alt="icon menu" onClick={showLi} />
            </div>
            {burger && (
                <div className="Burger--ul">
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Burger;