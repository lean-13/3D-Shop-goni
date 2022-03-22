// navBar
import Navbar from './components/navegacion/Navbar'
// item list
import ItemListContainer from './components/items/ItemListContainer'
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
        <ItemListContainer {...producto}/>
      </div>
    </header>
  );
}

export default App;
