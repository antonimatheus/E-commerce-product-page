import React, { useState, useEffect } from "react";
import imagesData from "./DataImg";

function MainImgFullScreen({ clicked, handleFullScreen }) {
  const handleCloseFullScreen = () => {
    handleFullScreen();
  };

  const images = [imagesData.image_product_1, imagesData.image_product_2, imagesData.image_product_3, imagesData.image_product_4];
  
  const [mainImageFullScreen, setMainImageFullScreen] = useState(imagesData.image_product_1);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Atualiza a imagem principal sempre que o índice atual mudar
    setMainImageFullScreen(images[currentImageIndex]);
  }, [currentImageIndex]);

  const handleThumbnailClickFullScreen = (image, index) => {
    setCurrentImageIndex(index);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="MainImgFullScreen--Container">
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
                      onClick={() => handleThumbnailClickFullScreen(image, index)}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
        <div className="Main--imgPrincipalFullScreenMobile">
          <img src={mainImageFullScreen} alt="image product" />
        </div>

        <div className="Main--nextMobile" onClick={goToNextImage}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>

        <div className="Main--previousMobile" onClick={goToPreviousImage}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
    </div>
  );
}

export default MainImgFullScreen;
