// react
import React from 'react';
// sass
import '../../scss/items/item.scss'

const Item = ({producto}) => {
    return (
        <div classname="card cardProducto">
            <img classname="card-img-top" src={producto.img} alt={producto.alt} />
            <div classname="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p classname="card-text">Precio: ${producto.precio}</p>
                <p classname="card-text">Stock: {producto.stock}</p>
                <p classname="card-text">Categoria: {producto.categoria}</p>
                <p classname="card-text">{producto.descripcion}</p>
            </div>
        </div>
    )
}

export default Item;