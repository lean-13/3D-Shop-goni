// react
import React from 'react';
import { Link } from "react-router-dom";
// boostrap
import { Card, Button } from 'react-bootstrap'
const CardVerMas = () => {
    return (
        <Card className="cardProducto">
            <Card.Body>
                <Card.Title className='simboloMas'>+</Card.Title>
                <Link to='/categoria/Productos'><Button className="botonMas">Ver mas</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default CardVerMas;