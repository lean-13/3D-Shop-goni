// react
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
// scss
import "./scss/body.scss"
// navBar
import Navbar from './components/navegacion/Navbar'
// item list
import ItemListContainer from './components/items/ItemListContainer'
// item detail
import ItemDetailContainer from './components/items/ItemDetailContainer'
// carrito
import Carrito from './components/carrito/Carrito'
// cart context
import { CartContext } from './context/CartContext';



const IVA = 1.21;

function App() {

  const [cart, setCart] = useState([])

  const AddItem = (item ) => {
    setCart([...cart, item])
  }

  const IsInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  return (           
    <CartContext.Provider value={{
      cart,
      AddItem,
      IsInCart
    }}>
      <BrowserRouter className='body'>
        <div className="App-header">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } /> 
          <Route path="/categoria/:categoriaId" element={ <ItemListContainer/> } /> 
          <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
          <Route path="/carrito" element={ <Carrito/> } /> 
          {/* error 404 */}
          <Route path="*" element={ <h1>Error 404</h1> } /> 
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
