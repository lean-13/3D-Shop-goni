// react
import React from 'react';
// sass
import '../../scss/header.scss'
const Itemproducto = ({id, nombre}) => {
    return (
        <div className="itemProductoInfo">
            <h3>Productos: </h3>
            <strong>id: {id}</strong>
            <strong>producto: {nombre}</strong>
        </div>
    );
}

export default Itemproducto;