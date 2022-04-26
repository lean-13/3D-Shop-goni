// react
import React, { useContext, useState} from 'react';
import {CartContext} from '../../context/CartContext';
import { Link } from "react-router-dom";
// firebase
import {query, where, documentId , writeBatch , collection, addDoc, Timestamp, getDocs } from 'firebase/firestore';
import { db } from '../../fireBase/config';
import swal from'sweetalert2';
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
        // revision de stock
        if (OutOfStock.length === 0) {
            Batch.commit()
            addDoc(OrdersRef, Orden)
                .then((doc) => {
                    setOrderId(doc.id)
                    VaciarCarrito();
                })
        } else {
            swal.fire({
                title: 'Hubo un problema inesperado',
                text: 'Stock no disponible',
                icon: 'error',
                confirmButtonText: 'Volver a Carrito'
              }).then((result) => {
                if (result.isConfirmed) {
                    console.log('link')
                    return <Navigate to='/' />
                }
              })
        }
    }
    // mostrar confirmacion
    if (orderId) {
        return (
            <div className='confirmacionCompra'>
                <h4>Tu compra se realizo correctamente!!</h4>
                <p>Numero de compra: {orderId} </p>
                <Link to='/' className='botonVolver'>Volver a inicio</Link>
            </div>
        )

    }

    // devolver a inicio si carrito esta vacio
    if ((cart.length === 0) || (orderId !== null) ) {
        return <Navigate to='/' />
    }

    // pregunta Confirmar compra
    const swalCompra = () => {
        swal.fire({
            title: 'Casi es tuyo',
            text: 'Confirmar Compra',
            icon: 'info',
            confirmButtonText: 'Confirmar Compra',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                swal.fire({                
                    title: 'Compra realizada con exito',
                    icon: 'success'
                });
                document.envia.submit()
            }
          })
        
    }
    return (
        <div className='checkout'>
            <h2>Checkout</h2>
            <div className='formCompra' id='form'>
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
                    <button className='botonEnviar' onClick={swalCompra}>Comprar</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;