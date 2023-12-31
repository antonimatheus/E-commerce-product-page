import React, { useState } from 'react'
import './App.css'
import Header from './Header/Header';
import MainContent from './Main/MainContent';

function App() {

  const [quantity, setQuantity] = useState(0)
  const [cartShop, setCartShop] = useState(false)
  
    function handleChangePlus() {
      setQuantity(quantity + 1)
  }

  function handleChangeMinus() {
      if(quantity > 0) {
          setQuantity(quantity - 1)
      }
  }

  const handleClick = () => {
      if(quantity > 0) {
        setCartShop(true)
      }
  }

  function mostrar() {
    if (quantity) {
        handleClick()  
    }
}

  return (
    
    <div>
      <Header 
        quantity={quantity}
        setQuantity={setQuantity}
        cartShop={cartShop}
        setCartShop={setCartShop}
        handleClick={handleClick}
      />

      <MainContent 
        quantity={quantity}
        setQuantity={setQuantity}
        cartShop={cartShop}
        setCartShop={setCartShop}
        handleChangePlus={handleChangePlus}
        handleChangeMinus={handleChangeMinus}
        handleClick={handleClick}
        mostrar={mostrar}
      />
    </div>
  )
}

export default App;
