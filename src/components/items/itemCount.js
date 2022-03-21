// react
import React, { useState } from 'react';
// sass
import '../../scss/items/ItemCount.scss'
// iconos 
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const ItemCount= ({stock}) => {
    const [contador, setContador] = useState(0);
    console.log(stock)
    const click = (tipo) => {
        if ((tipo === 'sumar') && (contador < stock)) {
            setContador(contador + 1);
        }else if ((tipo === 'restar') && (contador > 0)) {
            setContador(contador - 1);        
        }
    }

    const OnAdd = () => {
        alert('stock: ' + contador)
    }

    const AddToCart = () => {
        if (contador > 0) {
            OnAdd();
        }
    }

    return (
        <div className="card cardCantidadProducto">
            <div className="card-body">
                <h5 className="card-title">Cantidad Carrito</h5>
                <div className="cantidadCompra">
                    <button onClick={() => click('restar')} className="botonRemove" id="1"><RemoveOutlinedIcon/></button>
                    <strong className="numeroCantidadCompra">{contador}</strong>
                    <button onClick={() => click('sumar')} className="botonAdd" id="1"><AddOutlinedIcon/></button>
                </div>
                <button onClick={() => AddToCart()} className="botonAddCarrito"><AddShoppingCartIcon/>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;