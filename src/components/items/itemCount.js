// react
import React from 'react';
// sass
import '../../scss/items/ItemCount.scss'
// iconos 
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const ItemCount= ({stock, OnAdd, cantidad, setCantidad}) => {
    
    const click = (tipo) => {
        if ((tipo === 'suma') && (cantidad < stock)) {
            setCantidad(cantidad + 1);
        }else if ((tipo === 'resta') && (cantidad > 0)) {
            setCantidad(cantidad - 1);        
        }
    }

    const AddToCart = () => {
        if (cantidad > 0) {
            OnAdd(cantidad);
        }
    }

    return (
        <div className="cardCantidadProducto">
                <div className="cantidadCompra">
                    <button onClick={() => click('resta')} className="botonRemove"><RemoveOutlinedIcon/></button>
                    <strong className="numeroCantidadCompra">{cantidad}</strong>
                    <button onClick={() => click('suma')} className="botonAdd"><AddOutlinedIcon/></button>
                </div>
                <p className='stockProducto subrayadoText'>Stock: {stock}</p>
                { stock === 0 && <p>Sin stock, si desea puede encargar este producto</p>}
                <button onClick={() => AddToCart()} className="botonAddCarrito"><AddShoppingCartIcon className='iconoAddCart'/>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;