// react
import React from 'react';
import { Link } from "react-router-dom";
// sass
import '../../scss/items/ItemCountEdit.scss'
// icono
import EditIcon from '@material-ui/icons/Edit';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const ItemCountEdit= () => {

    return (
        <div className="cardCantidadProducto">
                <div className='cantidadCompraEdit'>
                    <button className='botonEditCantidad'><EditIcon 
                    className='iconoEdit'
                    />Quitar de carrito</button>
                </div>
            <p className='stockProducto subrayadoText'>Cantidad: </p>
            <Link to='/Carrito' className='linkTerminarCompra'><ShoppingCartOutlinedIcon 
            className='iconoComprar'
            />Comprar</Link>
        </div>
    )
}

export default ItemCountEdit;