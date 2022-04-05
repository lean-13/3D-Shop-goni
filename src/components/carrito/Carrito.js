import React, { useContext } from 'react';
// scss
import '../../scss/carrito/Carrito.scss'
// boton
import BotonVolver from '../buttons/ButtonVolver'
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
            <div className='carritoProductos'>
                {
                    cart.map((item) => (
                        <div className='itemProductoCarrito'>
                            <div className='imgCarrito'>
                                <img  src={item.img} alt={item.alt} />
                            </div>
                            <div className='productoCarritoInformacion'>
                                <p>{item.nombre}</p>
                                <p>Precio: ${item.precio * item.cantidad}</p>
                                <p>Cantidad: {item.cantidad}</p>
                            </div>
                            <div className='CarritoBotonDelete'>
                                <BotonVolver/>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='botonesBorradoCompra'>
                <button className='botonReset'>Borrar Carrito</button>
                <button className='botonShop'>Comprar Carrito</button>
            </div>
        </div>

    );
}

export default Carrito;