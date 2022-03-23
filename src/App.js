// navBar
import Navbar from './components/navegacion/Navbar'
// item list
import ItemListContainer from './components/items/ItemListContainer'
// react
import React from 'react';
// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// sass
import './scss/items/item.scss'

const IVA = 1.21;
const producto ={
  id:'1',
  nombre:'Maceta',
  categoria:'Hogar',
  precio: 1000 * IVA,
  stock: 5
}
function App() {
  return (
    <div>
      <header className="App-header">
        <Navbar/>
      </header>
      <div>
        <ItemListContainer {...producto}/>
      </div>
    </div>

  );
}

export default App;
