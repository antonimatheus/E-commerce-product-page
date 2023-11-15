import React, { useState } from "react";
import "./MainImgFullScreen.css"

import imagesData from "./DataImg";
import MainImgFullScreen from "./MainImgFullScreen";

const images = [imagesData.image_product_1, imagesData.image_product_2, imagesData.image_product_3, imagesData.image_product_4];

function MainImg() {

  const [mainImage, setMainImage] = useState(imagesData.image_product_1);
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
        {images.map((image, index) => (
          <div className="Main--imgsFullScreen" key={index}>
            <button>
              <img src={image}
                alt="image product" 
                onClick={()=> handleThumbnailClick(image)}
                />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainImg;
