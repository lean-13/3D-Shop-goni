// react
import React, { useContext, useState } from 'react';
import {CartContext} from '../../context/CartContext'
// scss
import './Checkout.scss'

const Checkout = () => {

    const {cart, CartTotal} = useContext(CartContext);

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const OnChangeNombre = (e) => {
        setNombre(e.target.value)
    }
    const OnChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const OnChangeTelefono = (e) => {
        setTelefono(e.target.value)
    }

    const Submit = (e) => {
        e.preventDefault()

        const Orden = {
            items: cart,
            total: CartTotal(),
            comprador: {
                nombre: nombre,
                email: email,
                celular: telefono
            }
        }
    
        console.log(Orden)
        console.log('submit')
    }
    return (
        <div className='checkout'>
            <h2>Checkout</h2>
            <div className='formCompra'>
                <form onSubmit={Submit}>
                    <div className='inputText'>
                        <p className='formText'>Nombre Completo</p>
                        <input
                            className='form-control'
                            type={'text'}
                            placeholder='Nombre completo'
                            value={nombre}
                            onChange={OnChangeNombre}
                        />
                    </div>
                    <div className='inputEmail'>
                        <p className='formText'>Email</p>
                        <input
                            className='form-control'
                            type={'email'}
                            placeholder='Email'
                            value={email}
                            onChange={OnChangeEmail}
                        />
                    </div>
                    <div className='inputTel'>
                        <p className='formText'>Telefono</p>
                        <input
                            className='form-control'
                            type={'tel'}
                            placeholder='Telefono'
                            value={telefono}
                            onChange={OnChangeTelefono}
                        />
                    </div>
                    <button className='botonEnviar' type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;