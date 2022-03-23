// react
import React from 'react';
// item
import { Item } from './Item'
// sass
import '../../scss/items/itemList.scss'

const Data = '../../data/dataProducto.json'

export const ItemList = (ListaProductos) => {
 
  return (
      <div className="cardCatalogo">
          {
              ListaProductos.map((item) => (
                  <Item nombre={item.nombre} precio={item.precio} img={item.img} stock={item.stock} categoria={item.categoria} descripcion={item.descripcion} alt={item.alt}/>
              ))
          }
      </div>
  )
}

