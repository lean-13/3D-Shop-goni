// react
import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
// sass
import '../../scss/items/item.scss'

const Item = ({producto}) => {
    return (
        <Card classname="cardProducto" style={{ width: '15rem' }}>
            <Card.Img src={producto.img} alt={producto.alt} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>Precio: ${producto.precio}</Card.Text>
                <Card.Text>Categoria: {producto.categoria}</Card.Text>
                <Link to={'/detail/$producto.id'}><Button className="botonVerMas">Ver mas</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default Item;