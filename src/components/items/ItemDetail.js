// react
import React from 'react';
import { Card } from 'react-bootstrap'
// button
import ButtonVolver from '../buttons/ButtonVolver';
// scss
import '../../scss/items/ItemDetail.scss'

const ItemDetail = ({ProductDetail}) => {
    const {nombre, categoria, img, alt,descripcion, precio, stock} = ProductDetail;

    return (
        <div className="DetalleProducto">
            <ButtonVolver/>
            <h2>Detalle de producto</h2>
            <Card style={{ width: '20rem' }}>
                <Card.Img  src={img} alt={alt} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>Precio: ${precio}</Card.Text>
                    <Card.Text>Stock: {stock}</Card.Text>
                    <Card.Text>Categoria: {categoria}</Card.Text>
                    <Card.Text>Descripcion: {descripcion}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail;