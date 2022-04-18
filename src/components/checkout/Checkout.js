// react
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import {CartContext} from '../../context/CartContext';
// firebase
import { collection, addDoc, doc, Timestamp, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../fireBase/config';
// scss
import './Checkout.scss'
import { Navigate } from 'react-router-dom';
const Checkout = () => {

    const {cart, CartTotal, VaciarCarrito} = useContext(CartContext);

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });
    const InputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }



    const Submit = (e) => {
        e.preventDefault()

        const Orden = {
            items: cart,
            total: CartTotal(),
            comprador: {...values},
            fyh: Timestamp.fromDate(new Date())
        }

        const OrdersRef = collection(db, 'orders')
        
        cart.forEach((item) => {
            const docRef = doc(db, 'productos', item.id)

            getDoc(docRef)
                .then((doc) => {
                    if (doc.data().stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else {
                        return (
                            <div className='confirmacionCompra'>
                                <h4>Se ha producido un error en su compra!!</h4>
                                <Link to='/' className='botonVolver'>Volver a inicio</Link>
                            </div>
                        )
                    }
                })
        })

        addDoc(OrdersRef, Orden)
            .then((doc) => {
                console.log(doc.id)
                setOrderId(doc.id)
                VaciarCarrito();
            })

    }

    if (orderId) {
        return (
            <div className='confirmacionCompra'>
                <h4>Tu compra se realizo correctamente!!</h4>
                <p>Numero de compra: {orderId} </p>
                <Link to='/' className='botonVolver'>Volver a inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
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
                            name='nombre'
                            value={values.nombre}
                            onChange={InputChange}
                            required
                        />
                    </div>
                    <div className='inputEmail'>
                        <p className='formText'>Email</p>
                        <input
                            className='form-control'
                            type={'email'}
                            placeholder='Email'
                            name='email'
                            value={values.email}
                            onChange={InputChange}
                            required
                        />
                    </div>
                    <div className='inputTel'>
                        <p className='formText'>Telefono</p>
                        <input
                            className='form-control'
                            type={'tel'}
                            placeholder='Telefono'
                            name='telefono'
                            value={values.telefono}
                            onChange={InputChange}
                            required
                        />
                    </div>
                    <button className='botonEnviar' type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;