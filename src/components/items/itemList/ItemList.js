// react
import React from 'react';
// item
import Item from '../item/Item'
// sass
import './/itemList.scss';

const ItemList = ({ListaProductos, Cargando, Categoria}) => {

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