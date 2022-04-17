// react
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
// scss
import './Checkout.scss'

const Checkout = () => {

    const {cart, CartTotal} = useContext(CartContext);

    const Orden = {
        items: cart,
        total: CartTotal(),
        comprador: {
            nombre: 'lean',
            email: 'leandro@hotmail.com',
            celular: 23421
        }
    }

    console.log(Orden)

    return (
        <div className='checkout'>
            <h2>Checkout</h2>
            <div className='formularioCompra'>
                <form>
                    <input
                        className='form-control my-3'
                        type={'text'}
                    />
                    <input
                        className='form-control my-3'
                        type={'email'}
                    />
                    <input
                        className='form-control my-3'
                        type={'tel'}
                    />
                    <button className='botonEnviar'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;