// react
import React from 'react';
// sass



export const Item = ({img,nombre, precio, stock, categoria, descripcion, alt}) => {
    return (
        <div classname="card cardProducto">
            <img classname="card-img-top" src={img} alt={alt} />
            <div classname="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p classname="card-text">Precio: ${precio}</p>
                <p classname="card-text">Stock: {stock}</p>
                <p classname="card-text">Categoria: {categoria}</p>
                <p classname="card-text">{descripcion}</p>
            </div>
      </div>
    )
}
