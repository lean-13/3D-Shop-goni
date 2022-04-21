// react
import React from 'react';
import { Link } from "react-router-dom";
// scss
import './Footer.scss';

const FooterContacto = () => {

    return (
        <div className='footer'>
            <div>
                <p className='textFooter'>Formulario Contacto</p>
            </div>
            <div>
                <p className='textFooter'>Metodos de pago</p>
            </div>
            <div>
                <p className='textFooter'>Como trabajamos</p>
            </div>
            <div>
                <p className='textFooter'>Quien soy</p>
            </div>
        </div>
    )
}

export default FooterContacto;