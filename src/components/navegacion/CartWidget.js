import React, { useContext } from 'react';
// scss
import '../../scss/navegacion/CartWidget.scss'
// iconos
// carrito
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CartContext } from '../../context/CartContext';
function Iconshopcart() {

    const { CartCantidad } = useContext(CartContext);

    return (
        <div className='divIconoCarrito'>
            <ShoppingCartOutlinedIcon
            fontSize="small" 
            className='iconoCarrito'
            />
            <strong>{CartCantidad()}</strong>
        </div>

    );
}

export default Iconshopcart;