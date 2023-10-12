import React, { useState } from "react";

import image_product_1 from "../assets/images/image-product-1.jpg"
import image_product_2 from "../assets/images/image-product-2.jpg"
import image_product_3 from "../assets/images/image-product-3.jpg"
import image_product_4 from "../assets/images/image-product-4.jpg"

function MainImg() {

    const [mainImage, setMainImage] = useState(image_product_1)
    const handleThumbnailClick = (image) => {
        setMainImage(image)
    }

    return (
        <div className="Main--block1">
        <div className="Main--imgPrincipal">
            <img src={mainImage} alt="image product"/>
        </div>
        <div className="Main--imgSub">
            <div className="Main--imgs">
                <img 
                    src={image_product_1} 
                    alt="image product" 
                    onClick={() => handleThumbnailClick(image_product_1)} 
                />
            </div>
            <div className="Main--imgs">
                <img 
                    src={image_product_2} 
                    alt="image product" 
                    onClick={() => handleThumbnailClick(image_product_2)}
                />
            </div>
            <div className="Main--imgs">
                <img 
                    src={image_product_3} 
                    alt="image product"
                    onClick={() => handleThumbnailClick(image_product_3)} 
                />
            </div>
            <div className="Main--imgs">
                <img 
                src={image_product_4}
                alt="image product" 
                onClick={() => handleThumbnailClick(image_product_4)}
                />
            </div>
        </div>
    </div>
    )
    
}

export default MainImg;