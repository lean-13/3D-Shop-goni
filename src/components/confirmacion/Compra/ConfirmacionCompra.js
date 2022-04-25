// react
import React from "react";
import swal from 'sweetalert';
/*
import { Link } from "react-router-dom";

const ConfirmacionCompra = (orderId) => {
    return (
        <div className='confirmacionCompra'>
            <h4>Tu compra se realizo correctamente!!</h4>
            <p>Numero de compra: {orderId} </p>
            <Link to='/' className='botonVolver'>Volver a inicio</Link>
        </div>
    )
}
*/
const ConfirmacionCompra = (orderId) => {
    swal("Compra Realizada con exito", "Id de pedido:" , {orderId}, "success");
}
export default ConfirmacionCompra;