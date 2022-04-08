// react
import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
// sass
import '../../scss/items/item.scss'

const Item = ({producto}) => {
    const {nombre, categoria, img, alt, precio, id, stock} = producto;
    return (
        <Card className="cardProducto" style={{ width: '15rem' }}>
            <Card.Img src={img} alt={alt} />
            <Card.Body>
                <Card.Title className='textScss'>{nombre}</Card.Title>
                <Card.Text>Precio: ${precio}</Card.Text>
                <Card.Text>Categoria: {categoria}</Card.Text>
                {stock === 0 && <Card.Text style={{color:'red'}}>Disponible solo para encargo</Card.Text> }
                {stock >= 1 && <Card.Text style={{color:'green'}}>Disponible</Card.Text> }
                <Link to={`/detail/${id}`}><Button className="botonVerMas">Ver mas</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default Item;