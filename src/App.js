// react
import React from 'react';
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




const IVA = 1.21;
const producto1 ={
  id:'1',
  nombre:'Maceta',
  categoria:'Hogar',
  precio: 1000 * IVA,
  stock: 5
}
function App() {
  return (
    <BrowserRouter className='body'>
      <div className="App-header">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={ <ItemListContainer {...producto1}/> } /> 
        <Route path="/categoria/:categoriaId" element={ <ItemListContainer {...producto1}/> } /> 
        <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
        <Route path="/carrito" element={ <Carrito/> } /> 
        {/* error 404 */}
        <Route path="*" element={ <h1>Error 404</h1> } /> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
