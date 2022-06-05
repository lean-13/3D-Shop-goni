// react
import React, { useContext, useState} from 'react';
import {CartContext} from '../../context/CartContext';
import { Link, useNavigate  } from "react-router-dom";
// firebase
import {query, where, documentId , writeBatch , collection, addDoc, Timestamp, getDocs } from 'firebase/firestore';
import { db } from '../../fireBase/config';
import swal from'sweetalert2';
// scss
import '../../scss/variables.scss'
import './Checkout.scss'

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const ValidarForm = () => {

}

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
    // navigate
    const Navigate = useNavigate();
    const handleNavigate = () => {
        Navigate('/carrito')
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

        const ConfigSwal = {
            color: '#5298F2',
            background: '#07080D',
            backdrop: '#5297f285',
            allowOutsideClick: false
        }

        // revision de stock
        if (OutOfStock.length === 0) {
            Batch.commit()
            addDoc(OrdersRef, Orden)
                .then((doc) => {
                    setOrderId(doc.id)
                    swal.fire({                
                        title: 'Compra realizada con exito',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                        ...ConfigSwal
                    });
                    VaciarCarrito();
                })
        } else {
            swal.fire({
                title: 'Hubo un problema inesperado',
                text: 'Stock no disponible',
                icon: 'error',
                confirmButtonText: 'Volver a Carrito',
                confirmButtonColor: 'green',
                ...ConfigSwal
              }).then((result) => {
                if (result.isConfirmed) {
                    handleNavigate()
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
 
    return (
        <div className='checkout'>
            <h2>Checkout</h2>
            <div className='formCompra' >
                <form onSubmit={Submit}  id='formCompraId'>
                    <div>
                        <div className='inputInformacionContacto'>
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
                        </div>
                        <div className='inputInformacionPago'>
                            
                        </div>
                    </div>

                    <button className='botonEnviar' type='submit' >Comprar</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;