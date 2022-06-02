// react
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// cart
import { CartContext } from "../../../context/CartContext";
// sass
import './ItemCountEdit.scss'
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
                        />Quitar de carrito
                    </button>
                </div>
            <p className='stockProductoDetail subrayadoText'>Cantidad: {cantidad}</p>
            <div className="terminarCompra">
                <Link to='/Carrito' className='linkTerminarCompra'><ShoppingCartOutlinedIcon 
                className='iconoComprar'
                />Terminar Compra</Link>
            </div>
        </div>
    )
}

export default ItemCountEdit;