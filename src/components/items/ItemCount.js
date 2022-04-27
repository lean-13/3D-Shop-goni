// react
import React from 'react';
// sass
import '../../scss/items/ItemCount.scss'
// iconos 
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const ItemCount= ({stock, OnAdd, cantidad, setCantidad}) => {
    
    const Sumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }
    const Restar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const AddToCart = () => {
        if (cantidad > 0) {
            OnAdd(cantidad);
        }
    }

    const botonRestarConfig = {
        className: `botonRemove ${cantidad > 0 ? 'botonRemoveColor' : 'botonRemoveColorBlock'}`,
        onClick: Restar,
        disabled: cantidad === 0
    }
    const botonSumarConfig = {
        className: `botonAdd ${cantidad < stock ? 'botonAddColor' : 'botonAddColorBlock'}`,
        onClick: Sumar,
        disabled: cantidad === stock
    }
    return (
        <div className="cardCantidadProducto">
                <div className="cantidadCompra">
                    <button {...botonRestarConfig}>
                        <RemoveOutlinedIcon/>
                    </button>
                    <strong className="numeroCantidadCompra">{cantidad}</strong>
                    <button {...botonSumarConfig}>
                        <AddOutlinedIcon/>
                    </button>
                </div>
                <p className='stockProductoDetail subrayadoText'>Stock: {stock}</p>
                { stock === 0 && <p>Sin stock, si desea puede encargar este producto</p>}
                <button onClick={() => AddToCart()} 
                    className={
                        `botonAddCarrito ${cantidad > 0 ? 
                            'botonAddCarritoColor' 
                            :
                            'botonAddCarritoColorBlock'
                        }`}
                    disabled={cantidad === 0}
                >
                    <AddShoppingCartIcon className='iconoAddCart'/>
                    Agregar al carrito
                </button>
        </div>
    )
}

export default ItemCount;