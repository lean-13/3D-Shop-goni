import React from 'react';
// scss
import '../../scss/carrito/Carrito.scss'
// iconos
// carrito
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Carrito() {
    return (
        <div className='divCarrito'>
            <h1><ShoppingCartOutlinedIcon
            className='iconoCarrito'
            />Carrito</h1>
        </div>

    );
}

export default Carrito;