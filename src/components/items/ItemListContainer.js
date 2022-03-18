// react
import React from 'react';
// sass
import '../../scss/header.scss'
const Itemproducto = ({nombre, categoria, precio, stock}) => {
    return (
        <div className="itemProductoInfo">
            <h3>Productos: </h3>
            <strong>producto: {nombre}</strong>
            <strong>categoria: {categoria}</strong>
            <strong>precio: ${precio}</strong>
            <strong>stock: {stock}</strong>
        </div>
    );
}

export default Itemproducto;