import React, { useContext } from 'react';
// scss
import '../../scss/carrito/Carrito.scss'
// iconos
// carrito
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CartContext } from '../../context/CartContext';

function Carrito() {

    const { cart } = useContext(CartContext)
    console.log(cart)

    return (
        <div className='divCarrito'>
            <h1><ShoppingCartOutlinedIcon
            className='iconoCarrito'
            />Carrito</h1>
        </div>

    );
}

export default Carrito;