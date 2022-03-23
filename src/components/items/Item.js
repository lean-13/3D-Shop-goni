// react
import React from 'react';
// sass


export const Item = ({img, precio, stock, categoria, descripcion}) => {
    return (
        <div classname="card">
            <img classname="card-img-top" src={img} alt="Card image"/>
            <div classname="card-body">
                <p classname="card-text">Precio: ${precio}</p>
                <p classname="card-text">Stock: {stock}</p>
                <p classname="card-text">Categoria: {categoria}</p>
                <p classname="card-text">{descripcion}</p>
            </div>
      </div>
    )
}
