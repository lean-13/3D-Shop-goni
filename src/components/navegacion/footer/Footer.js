// react
import React from 'react';
import { Link } from "react-router-dom";
// scss
import './Footer.scss';

const FooterContacto = () => {

    return (
        <div className='footer'>
            <div>
                <Link to='/' className='textFooter'>Formulario Contacto</Link>
            </div>
            <div>
                <Link to='/' className='textFooter'>Metodos de pago</Link>
            </div>
            <div>
                <Link to='/' className='textFooter'>Como trabajamos</Link>
            </div>
            <div>
                <Link to='/' className='textFooter'>Quien soy</Link>
            </div>
        </div>
    )
}

export default FooterContacto;