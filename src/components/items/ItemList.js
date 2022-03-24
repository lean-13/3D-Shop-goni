// react
import React from 'react';
// item
import Item from './Item'
// sass
import '../../scss/items/itemList.scss'

const ItemList = ({ListaProductos}) => {
  return (
      <div className="cardCatalogo">
          {
              ListaProductos.map((producto) => (
                  <Item producto={producto} key={producto.id}/>
              ))
          }
      </div>
  )
}

export default ItemList;