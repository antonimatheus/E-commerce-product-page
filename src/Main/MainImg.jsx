import React, { useState } from "react";
import "./MainImgFullScreen.css"

import MainImgFullScreen from "./MainImgFullScreen";

import image_product_1 from "../assets/images/image-product-1.jpg";
import image_product_2 from "../assets/images/image-product-2.jpg";
import image_product_3 from "../assets/images/image-product-3.jpg";
import image_product_4 from "../assets/images/image-product-4.jpg";

function MainImg() {
  const [mainImage, setMainImage] = useState(image_product_1);
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const [clicked, setClicked] = useState(false);
    const handleFullScreen = () => {
      setClicked(!clicked)
    }

  return (
    <div className="Main--block1">

      <MainImgFullScreen
          handleFullScreen={handleFullScreen}
          mainImage={mainImage}
          handleThumbnailClick={handleThumbnailClick}
          clicked={clicked}
      />

      <div className="Main--imgPrincipal">
        <img src={mainImage} alt="image product" onClick={handleFullScreen}/>
      </div>
      <div className="Main--imgSub">
        <div className="Main--imgs">
          <button>
              <img
                src={image_product_1}
                alt="image product"
                onClick={() => handleThumbnailClick(image_product_1)}
              />
          </button>
        </div>
        <div className="Main--imgs">
          <button>
              <img
                src={image_product_2}
                alt="image product"
                onClick={() => handleThumbnailClick(image_product_2)}
              />
          </button>
        </div>
        <div className="Main--imgs">
          <button>
              <img
                src={image_product_3}
                alt="image product"
                onClick={() => handleThumbnailClick(image_product_3)}
              />
          </button>
        </div>
        <div className="Main--imgs">
          <button>
              <img
                src={image_product_4}
                alt="image product"
                onClick={() => handleThumbnailClick(image_product_4)}
              />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainImg;
