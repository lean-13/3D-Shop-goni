// react
import React from 'react';
// boostrap
import { Card, Button } from 'react-bootstrap'
const CardVerMas = (categoria) => {
    return (
        <Card className="cardProducto">
            <Card.Body>
                <Card.Title className='simboloMas'>+</Card.Title>
                <Button to={`/categoria/productos`} className="botonMas">Ver mas</Button>
            </Card.Body>
        </Card>
    )
}

export default CardVerMas;