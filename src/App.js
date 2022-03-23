// navBar
import Navbar from './components/navegacion/Navbar'
// item list
import ItemListContainer from './components/items/ItemListContainer'
// react
import React from 'react';
// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";


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
      <div className="App-header">
        <Navbar/>
      </div>
      <div>
        <ItemListContainer {...producto}/>
      </div>
    </div>

  );
}

export default App;
