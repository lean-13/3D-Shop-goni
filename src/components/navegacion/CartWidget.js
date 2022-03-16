// scss
import '../../scss/variables.scss'
// iconos
// carrito
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
function Iconshopcart() {
    return (
        <div className='divIconoCarrito'>
            <ShoppingCartOutlinedIcon
            fontSize="small" 
            className='iconoCarrito'
            />
        </div>

    );
}

export default Iconshopcart;