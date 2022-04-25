// react
import React, { useContext, useState} from 'react';
import {CartContext} from '../../context/CartContext';
// firebase
import {query, where, documentId , writeBatch , collection, addDoc, Timestamp, getDocs } from 'firebase/firestore';
import { db } from '../../fireBase/config';
import swal from'sweetalert2';
// scss
import './Checkout.scss'
import { Navigate } from 'react-router-dom';
import ConfirmacionCompra from '../confirmacion/Compra/ConfirmacionCompra';

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



    const Submit = async (e) => {
        e.preventDefault()

        const Orden = {
            items: cart,
            total: CartTotal(),
            comprador: {...values},
            fyh: Timestamp.fromDate(new Date())
        }
        const Batch = writeBatch(db)
        const OrdersRef = collection(db, 'orders')
        const ProductosRef = collection(db, 'productos')

        const Q = query(ProductosRef, where(documentId(), 'in' , cart.map((item) => item.id)))
        const Productos = await getDocs(Q)

        const OutOfStock = []

        Productos.docs.forEach((doc) => {
            const ItemInCart = cart.find((item) => item.id === doc.id)

            if ( doc.data().stock >= ItemInCart.cantidad) {
                Batch.update(doc.ref, {
                    stock: doc.data().stock - ItemInCart.cantidad
                })
            } else {
                OutOfStock.push(ItemInCart)
            }
        })

        if (OutOfStock.length === 0) {
            Batch.commit()
            addDoc(OrdersRef, Orden)
                .then((doc) => {
                    <ConfirmacionCompra/>
                    setOrderId(doc.id)
                    swal.fire({                
                    title: 'Compra realizada con exito',
                    icon: 'success',
                    buttons: 'Ok'});
                    VaciarCarrito();
                })
        } else {
            swal.fire({
                title: 'Hubo un problema inesperado',
                text: 'por favor revise los datos de compra',
                icon: 'error',
                buttons: 'Volver a carrito'
              })
        }
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