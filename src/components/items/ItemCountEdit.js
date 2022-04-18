// react
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// cart
import { CartContext } from "../../context/CartContext";
// sass
import '../../scss/items/ItemCountEdit.scss'
// icono
import EditIcon from '@material-ui/icons/Edit';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const ItemCountEdit= ({cantidad, id}) => {

    const {RemoveItem } = useContext(CartContext);
    return (
        <div className="cardCantidadProducto">
                <div className='cantidadCompraEdit'>
                    <button className='botonEditCantidad'
                        onClick={() => RemoveItem(id)}
                    >
                        <EditIcon 
                        className='iconoEdit'
                        />Modificar cantidad
                    </button>
                </div>
            <p className='stockProducto subrayadoText'>Cantidad: {cantidad}</p>
            <Link to='/Carrito' className='linkTerminarCompra'><ShoppingCartOutlinedIcon 
            className='iconoComprar'
            />Comprar</Link>
        </div>
    )
}

export default ItemCountEdit;