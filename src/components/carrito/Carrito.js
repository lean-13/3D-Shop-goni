import React, { useContext } from 'react';
// scss
import '../../scss/carrito/Carrito.scss'
// iconos
// carrito
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CartContext } from '../../context/CartContext';
// remove
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

function Carrito() {

    const { cart, CartTotal, VaciarCarrito, RemoveItem } = useContext(CartContext)
    console.log(cart)

    return (
        <div className='divCarrito'>
            <h1><ShoppingCartOutlinedIcon
            className='iconoCarrito'
            />Carrito</h1>
            <div className='carritoProductos'>
                {
                    cart.map((item) => (
                        <div className='itemProductoCarrito' key={item.id }>
                            <div className='imgCarrito'>
                                <img  src={item.img} alt={item.alt} />
                            </div>
                            <div className='productoCarritoInformacion'>
                                <p>{item.nombre}</p>
                                <p>Precio: ${item.precio * item.cantidad}</p>
                                <p>Cantidad: {item.cantidad}</p>
                            </div>
                            <div className='CarritoBotonDelete'>
                                <button onClick={() => RemoveItem(item.id)} className='botonCartRemove'><RemoveShoppingCartIcon className='iconoCartRemove'/></button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='seccionControlCarrito'>
                <div>
                    <h3>Precio Total: ${CartTotal()}</h3>
                </div>
                <div className='botonesBorradoCompra'>
                    <button onClick={VaciarCarrito} className='botonReset'>Borrar Carrito</button>
                    <button className='botonShop'>Comprar Carrito</button>
                </div>
            </div>
        </div>

    );
}

export default Carrito;