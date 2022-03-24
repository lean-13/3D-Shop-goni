// navBar
import Navbar from './components/navegacion/Navbar'
// item list
import ItemListContainer from './components/items/ItemListContainer'
// react
import React from 'react';
// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


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
      </div>
    </div>

  );
}

export default App;
