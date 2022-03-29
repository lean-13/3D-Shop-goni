// scss
import '../../scss/variables.scss'
// iconos
// carrito
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
function Carrito() {
    return (
        <div className='divCarrito'>
            <h1><ShoppingCartOutlinedIcon
            fontSize="small" 
            className='iconoCarrito'
            />Carrito</h1>
        </div>

    );
}

export default Carrito;