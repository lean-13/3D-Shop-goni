// navBar
import Navbar from './components/navegacion/navbar'
// item list
import Itemproducto from './components/items/ItemListContainer'
// item count
import ItemCount from './components/items/itemCount'
// react
import React from 'react';

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
    <header className="App-header">
      <Navbar/>
      <div>
        <Itemproducto {...producto}/>
        <ItemCount {...producto}/>
      </div>
    </header>
  );
}

export default App;
