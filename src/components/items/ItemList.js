// react
import React from 'react';
// boostrap
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
// item
import Item from './Item'
// sass
import '../../scss/items/itemList.scss'

const ItemList = ({ListaProductos}) => {
    console.log({ListaProductos})
    return (
        <div className="cardCatalogo">
            {
                ListaProductos.map((producto) => (
                    <Item producto={producto} key={producto.id}/>
                ))
            }
            <Card className="cardProducto">
                <Card.Body>
                    <Card.Title className='simboloMas'>+</Card.Title>
                    <Button className="botonMas">Ver mas</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default ItemList;