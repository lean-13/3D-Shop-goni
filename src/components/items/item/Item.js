// react
import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
// sass
import './item.scss'

const Item = ({producto}) => {
    const {nombre, categoria, img, alt, precio, id, stock} = producto;
    return (
        <Card className="cardProducto">
            <Card.Img src={img} alt={alt} />
            <Card.Body className='cardBody'>
                <Card.Title className='nombreProducto mb-1'>{nombre}</Card.Title>
                <Card.Text className='precioProducto mb-1'>Precio: ${precio}</Card.Text>
                <Card.Text className='categoriaProducto mb-1'>Categoria: {categoria}</Card.Text>
                {stock === 0 && <Card.Text className='encargoProducto mb-1'>Sin stock</Card.Text> }
                {stock >= 1 && <Card.Text className='disponibleProducto mb-1'>Disponible</Card.Text> }
                <Link to={`/detail/${id}`}><Button className="botonVerMas">Ver mas</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default Item;