// react
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
// scss
import './Checkout.scss'

const Checkout = () => {

    const {cart, cartTotal} = useContext(CartContext);

    const Orden = {
        items: cart,
        total: cartTotal(),
        comprador: {
            nombre: 'lean',
            email: 'leandro@hotmail.com',
            celular: '234213'
        }
    }

    console.log(Orden)

    return (
        <div className='checkout'>
            <h2>Checkout</h2>
        </div>
    )
}

export default Checkout;