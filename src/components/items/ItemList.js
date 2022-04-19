// react
import React from 'react';
// item
import Item from './Item'
// sass
import '../../scss/items/itemList.scss'
// ver mas
import CardVerMas from '../buttons/cardBotonVerMas/cardBotonVerMas';
const ItemList = ({ListaProductos}) => {
    return (
        <div className="cardCatalogo">
            {
                ListaProductos.map((producto) => (
                    <Item producto={producto} key={producto.id}/>
                ))
            }
            <CardVerMas/>
        </div>
    )
}

export default ItemList;