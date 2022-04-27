// react
import React from 'react';
// item
import Item from '../item/Item'
// sass
import './/itemList.scss'
// ver mas
import CardVerMas from '../../buttons/cardBotonVerMas/cardBotonVerMas';
const ItemList = ({ListaProductos, Cargando, Categoria}) => {
    return (
        <div className="cardCatalogo">
            {
                ListaProductos.map((producto) => (
                    <Item producto={producto} key={producto.id}/>
                ))
            }
            {(Cargando || (Categoria === undefined))  && <CardVerMas/>}
        </div>
    )   
}

export default ItemList;