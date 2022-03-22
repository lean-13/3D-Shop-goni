// react
import React, { useState } from 'react';
// sass
import '../../scss/items/ItemCount.scss'
// iconos 
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const ItemCount= ({stock, initial, OnAdd}) => {
    const [contador, setContador] = useState(initial);
    const click = (tipo) => {
        if ((tipo === 'suma') && (contador < stock)) {
            setContador(contador + 1);
        }else if ((tipo === 'resta') && (contador > 0)) {
            setContador(contador - 1);        
        }
    }

    const AddToCart = () => {
        if (contador > 0) {
            OnAdd(contador);
        }
    }

    return (
        <div className="card cardCantidadProducto">
            <div className="card-body">
                <h5 className="card-title">Cantidad Carrito</h5>
                <div className="cantidadCompra">
                    <button onClick={() => click('resta')} className="botonRemove"><RemoveOutlinedIcon/></button>
                    <strong className="numeroCantidadCompra">{contador}</strong>
                    <button onClick={() => click('suma')} className="botonAdd"><AddOutlinedIcon/></button>
                </div>
                <button onClick={() => AddToCart()} className="botonAddCarrito"><AddShoppingCartIcon/>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;