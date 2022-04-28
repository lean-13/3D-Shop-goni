// react
import React from 'react';
// item
import Item from '../item/Item'
// sass
import './/itemList.scss'
// ver mas
import CardVerMas from '../../buttons/cardBotonVerMas/cardBotonVerMas';

const ItemList = ({ListaProductos, Cargando, Categoria}) => {

    let MostrarVerMas = ((Cargando === false) && (Categoria === undefined)) 

    return (
        <div className="cardCatalogo">
            {
                ListaProductos.map((producto) => (
                    <Item producto={producto} key={producto.id}/>
                ))
            }
            {MostrarVerMas  && <CardVerMas/>}
        </div>
    )   
}

export default ItemList;