// react
import React from 'react';
// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
// navBar
import Navbar from './components/navegacion/Navbar'
// item list
import ItemListContainer from './components/items/ItemListContainer'
// item detail
import ItemDetailContainer from './components/items/ItemDetailContainer'



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
    <div>
      <div className="App-header">
        <Navbar/>
      </div>
      <div>
        <ItemListContainer {...producto1}/>
        <ItemDetailContainer/>
      </div>
    </div>

  );
}

export default App;
