// react
import React from 'react';
// sass
import '../../scss/header.scss'
// item count
import ItemCount from './ItemCount'

const initial = 1;

const OnAdd = (contador) => {
    alert('stock: ' + contador)
    console.log(contador)
}

const ItemListContainer = ({nombre, categoria, precio, stock}) => {
    return (
        <div className="itemProductoInfo">
            <ItemCount
            initial = {initial}
            OnAdd = {OnAdd}
            stock = {stock}
            />
            <h3>Productos: </h3>
            <strong>producto: {nombre}</strong>
            <strong>categoria: {categoria}</strong>
            <strong>precio: ${precio}</strong>
            <strong>stock: {stock}</strong>
        </div>
    );
}

export default ItemListContainer;