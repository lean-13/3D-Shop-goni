// react
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
// scss
import './Checkout.scss'

const Checkout = () => {

    const {cart, CartTotal} = useContext(CartContext);

    const Submit = (e) => {
        e.preventDefault()

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
                        />
                    </div>
                    <div className='inputEmail'>
                        <p className='formText'>Email</p>
                        <input
                            className='form-control'
                            type={'email'}
                        />
                    </div>
                    <div className='inputTel'>
                        <p className='formText'>Telefono</p>
                        <input
                            className='form-control'
                            type={'tel'}
                        />
                    </div>
                    <button className='botonEnviar'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;