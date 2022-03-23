// react
import React from 'react';
// sass
import '../../scss/header.scss'
// item count
import ItemCount from './ItemCount'
import ItemList from './ItemList';
const initial = 1;

const OnAdd = (contador) => {
    alert('stock: ' + contador)
    console.log(contador)
}

const ItemListContainer = ({nombre, categoria, precio, stock}) => {
    return (
        <div>
            <div className="itemProductoInfo">
                <h3>Productos: </h3>
                <strong>producto: {nombre}</strong>
                <strong>categoria: {categoria}</strong>
                <strong>precio: ${precio}</strong>
                <strong>stock: {stock}</strong>
            </div>
            <div>
                <ItemCount
                    initial = {initial}
                    OnAdd = {OnAdd}
                    stock = {stock}
                    />
            </div>
            <div>
                <ItemList/>
            </div>
        </div>

    );
}

export default ItemListContainer;