// react
import React from "react";
import { Link } from "react-router-dom";
// scss
import './Error.scss';

const Error = () => {
    return (
        <div className='error'>
            <h4>Hubo un error inesperado!!</h4>
            <Link to='/' className='botonVolver'>Volver a inicio</Link>
        </div>
    )
}

export default Error;