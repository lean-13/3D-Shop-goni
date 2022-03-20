// react
import React, { useState } from 'react';
// sass
import '../../scss/items/ItemCount.scss'
// iconos 
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';


const ItemCount= () => {
    const [contador, setContador] = useState(0);

    const click = (tipo) => {
        if (tipo === 'sumar') {
            setContador(contador + 1);
        }else {
            setContador(contador - 1);
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
            </div>
        </div>
    )
}

export default ItemCount;