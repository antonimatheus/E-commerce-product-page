import React, { useState } from "react";
import image_product_1 from "../assets/images/image-product-1.jpg";
import image_product_2 from "../assets/images/image-product-2.jpg";
import image_product_3 from "../assets/images/image-product-3.jpg";
import image_product_4 from "../assets/images/image-product-4.jpg";

function MainImgFullScreen({ clicked, handleFullScreen }) {
  const handleCloseFullScreen = () => {
    handleFullScreen(); // Call the handleFullScreen function from props
  };

  const images = [image_product_1, image_product_2, image_product_3, image_product_4];
  
  const [mainImageFullScreen, setMainImageFullScreen] = useState(image_product_1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClickFullScreen = (image) => {
    setMainImageFullScreen(image);
  };

  const goToNextImage = () => {
    // Check if the next index is within the bounds of the images array
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setMainImageFullScreen(images[currentImageIndex + 1]);
    } else {
      // Otherwise, wrap around to the beginning of the array
      setCurrentImageIndex(0);
      setMainImageFullScreen(images[0]);
    }
  };

  const goToPreviousImage = () => {
    // Check if the previous index is within the bounds of the images array
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setMainImageFullScreen(images[currentImageIndex - 1]);
    } else {
      // Otherwise, wrap around to the end of the array
      setCurrentImageIndex(images.length - 1);
      setMainImageFullScreen(images[images.length - 1]);
    }
  };

  return (
    <div>
      {clicked && (
        <div className="Main--imgFullScreen">
          <div className="Main--imgFullScreenBlock">
            <div>
              <button onClick={handleCloseFullScreen} className="closeImg">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="Main--imgPrincipalFullScreen">
              <img src={mainImageFullScreen} alt="image product" />
            </div>

            <div className="Main--next" onClick={goToNextImage}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>

            <div className="Main--previous" onClick={goToPreviousImage}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>

            <div className="Main--imgSubFullScreen">
              {images.map((image, index) => (
                <div className="Main--imgsFullScreen" key={index}>
                  <button>
                    <img
                      src={image}
                      alt="image product"
                      onClick={() => handleThumbnailClickFullScreen(image)}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainImgFullScreen;
