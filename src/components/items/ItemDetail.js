// react
import React from 'react';
// scss
import '../../scss/items/ItemDetail.scss'

const ItemDetail = ({ProductDetail}) => {
    const {nombre, categoria, img, alt,descripcion, precio, stock} = ProductDetail;
    return (
        <div className="DetalleProducto">
            <h2>Detalle de producto</h2>
            <div classname="card cardProducto">
                <img classname="card-img-top" src={img} alt={alt} />
                <div classname="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p classname="card-text">Precio: ${precio}</p>
                    <p classname="card-text">Stock: {stock}</p>
                    <p classname="card-text">Categoria: {categoria}</p>
                    <p classname="card-text">Descripcion: {descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;