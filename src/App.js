// react
import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
// scss
import "./scss/App.scss"
// navBar
import NavBar from './components/navegacion/navBar/Navbar'
// carousel
import InicioCarousel from './components/carousel/inicioCarousel/InicioCarousel';
import CategoriaCarousel from './components/carousel/CategoriaCarousel/CategoriaCarousel';
// footer
import FooterContacto from './components/navegacion/footer/Footer';
// item list
import ItemListContainer from './components/items/itemListContainer/ItemListContainer';
// item detail
import ItemDetailContainer from './components/items/itemDetailContainer/ItemDetailContainer';
// carrito
import Carrito from './components/carrito/Carrito';
// cart context
import { CartProvider} from './context/CartContext';
import Checkout from './components/checkout/Checkout';
import { Router } from '@material-ui/icons';



function App() {

  return (   
    <div className='background'>
      <CartProvider>
        <BrowserRouter>
          <div className="App-header">
            <NavBar/>
          </div>
          <Routes>
            <Route path="/" element={ <> <InicioCarousel/> <ItemListContainer/> </> } /> 
            <Route path="/categoria/:categoriaId" element={ <><CategoriaCarousel/> <ItemListContainer/></> } />
            <Route path="/allProductos" element={ <><CategoriaCarousel/> <ItemListContainer/></> } /> 
            <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
            <Route path="/carrito" element={ <Carrito/> } /> 
            <Route path="/checkout" element={ <Checkout/> } />
            {/* error 404 */}
            <Route path="*" element={ <h1>Error 404</h1> } /> 
          </Routes>
          <footer>
            <FooterContacto/>
          </footer>
        </BrowserRouter>
      </CartProvider>
    </div>

  );
}

export default App;
