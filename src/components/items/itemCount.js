// react
import React from 'react';
// sass
import '../../scss/items/ItemCount.scss'
// iconos 
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';


function ItemCount() {
    return (
        <div className="card cardCantidadProducto">
            <div className="card-body">
                <h5 className="card-title">Cantidad Carrito</h5>
                <div className="cantidadCompra">
                    <button className="botonRemove"><RemoveOutlinedIcon/></button>
                    <strong className="numeroCantidadCompra">0</strong>
                    <button className="botonAdd"><AddOutlinedIcon/></button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;