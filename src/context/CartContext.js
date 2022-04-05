import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const AddItem = (item ) => {
      setCart([...cart, item])
    }
  
    const IsInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const CartCantidad = () => {
      return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    }

    const CartTotal = () => {
      return cart.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
    }
    return (
        <CartContext.Provider value={{
            cart,
            AddItem,
            IsInCart,
            CartCantidad,
            CartTotal
          }}>
            {children}
        </CartContext.Provider>
    )
}