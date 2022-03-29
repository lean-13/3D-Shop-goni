// scss
import '../../scss/variables.scss'
// iconos
// carrito
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
function Carrito() {
    return (
        <div className='divCarrito'>
            <ShoppingCartOutlinedIcon
            fontSize="small" 
            className='iconoCarrito'
            />
        </div>

    );
}

export default Carrito;