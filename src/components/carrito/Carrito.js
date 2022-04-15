import React, { useContext } from "react";
import { Link } from "react-router-dom";
// scss
import "../../scss/carrito/Carrito.scss";
// iconos
// carrito
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { CartContext } from "../../context/CartContext";
// remove
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

function Carrito() {
  const { cart, CartTotal, VaciarCarrito, RemoveItem } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="divCarrito divCarritoVacio">
        <p className="mensaje subrayadoText">Su carrito se encuentra vacio</p>
        <Link to="/" className="botonVolverInicio">
          Volver a inicio
        </Link>
      </div>
    );
  }
  return (
    <div className="divCarrito">
      <h1>
        <ShoppingCartOutlinedIcon className="iconoCarrito" />
        Carrito
      </h1>
      <div className="carritoProductos">
        {cart.map((item) => (
          <div className="itemProductoCarrito" key={item.id}>
            <div className="imgCarrito">
              <img src={item.img} alt={item.alt} />
            </div>
            <div className="productoCarritoInformacion">
              <p className="nombreProducto">{item.nombre}</p>
              <p className="precioProducto">Precio: ${item.precio * item.cantidad}</p>
              <p className="cantidadProducto">Cantidad: {item.cantidad}</p>
            </div>
            <div className="CarritoBotonDelete">
              <button
                onClick={() => RemoveItem(item.id)}
                className="botonCartRemove"
              >
                <RemoveShoppingCartIcon className="iconoCartRemove" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="seccionControlCarrito">
        <div>
          <h3>Precio Total: ${CartTotal()}</h3>
        </div>
        <div className="botonesBorradoCompra">
          <button onClick={VaciarCarrito} className="botonReset">
            Borrar Carrito
          </button>
          <Link to="/checkout" className="botonShop">
            <ShoppingCartOutlinedIcon className="iconoCarrito"/>
            Comprar Carrito
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
