import React, { useState } from "react";

import image_product_1 from "../assets/images/image-product-1.jpg";
import image_product_2 from "../assets/images/image-product-2.jpg";
import image_product_3 from "../assets/images/image-product-3.jpg";
import image_product_4 from "../assets/images/image-product-4.jpg";
import close from "../assets/images/icon-close.svg";

function MainImgFullScreen({
    clicked,
    handleFullScreen
}) {

    const handleCloseFullScreen = () => {
      handleFullScreen(); // Call the handleFullScreen function from props
    };

    const [mainImageFullScreen, setMainImageFullScreen] = useState(image_product_1);
    const handleThumbnailClickFullScreen = (image) => {
    setMainImageFullScreen(image);
  };

    return (
        <div>
        {clicked && (
          <div className="Main--imgFullScreen">
            <button onClick={handleCloseFullScreen} className="closeImg">
                <img src={close} />
            </button>
            
          <div className="Main--imgFullScreenBlock">
            <div className="Main--imgPrincipalFullScreen">
                <img src={mainImageFullScreen} alt="image product" />
            </div>
            <div className="Main--imgSubFullScreen">
              <div className="Main--imgsFullScreen">
                <button>
                    <img
                      src={image_product_1}
                      alt="image product"
                      onClick={() => handleThumbnailClickFullScreen(image_product_1)}
                    />
                </button>
              </div>
              <div className="Main--imgsFullScreen">
                <button>
                    <img
                      src={image_product_2}
                      alt="image product"
                      onClick={() => handleThumbnailClickFullScreen(image_product_2)}
                    />
                </button>
              </div>
              <div className="Main--imgsFullScreen">
                <button>
                    <img
                      src={image_product_3}
                      alt="image product"
                      onClick={() => handleThumbnailClickFullScreen(image_product_3)}
                    />
                </button>
              </div>
              <div className="Main--imgsFullScreen">
                <button>
                    <img
                      src={image_product_4}
                      alt="image product"
                      onClick={() => handleThumbnailClickFullScreen(image_product_4)}
                    />
                </button>
              </div>
            </div>
          </div>


          </div>
        )}
        
      </div>
    )
}

export default MainImgFullScreen;