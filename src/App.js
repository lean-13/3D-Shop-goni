// navBar
import Navbar from './components/navegacion/navbar'
// item list
import Itemproducto from './components/items/ItemListContainer'
// react
import React from 'react';


const producto ={
  id:'1',
  nombre:'maceta'
}
function App() {
  return (
    <header className="App-header">
      <Navbar/>
      <Itemproducto {...producto}/>
    </header>
  );
}

export default App;
