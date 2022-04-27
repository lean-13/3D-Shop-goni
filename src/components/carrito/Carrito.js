import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swal from'sweetalert2';
// scss
import "./Carrito.scss";
// cart
import { CartContext } from "../../context/CartContext";
// carrito
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DeleteIcon from '@material-ui/icons/Delete';
// lapiz
import CreateIcon from '@material-ui/icons/Create';
// remove
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
// flecha
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
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

  const ConfigSwal = {
    color: '#5298F2',
    background: '#07080D',
    backdrop: '#5297f285',
}

  const SwalVaciarCarrito = () => {
    swal.fire({
      title: 'Cuidado!!',
      text: 'Seguro que quieres vaciar el carrito',
      icon: 'warning',
      confirmButtonColor: 'red',
      confirmButtonText: 'Vaciar Carrito',
      showCancelButton: true,
      cancelButtonColor: 'rgba(13, 177, 13, 0.952)',
      cancelButtonText: 'Cancelar',
      ...ConfigSwal
    }).then((result) => {
      if (result.isConfirmed) {
        VaciarCarrito()
          swal.fire({                
              title: 'Vaciado con exito',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
              ...ConfigSwal
          });
          
      }
    })
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
              <p className="stockProducto">stock disponible: {item.stock}</p>
            </div>
            <div className="botonEditProducto">
              <Link to={`/detail/${item.id}`} className='botonEditProductoId'><CreateIcon className="iconEdit"/></Link>
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
          <button onClick={SwalVaciarCarrito} className="botonReset">
            <DeleteIcon className="iconoDelete"/>
            Borrar Carrito
          </button>
          <Link to="/checkout" className="botonShop">
            <DoubleArrowIcon className="iconoShop"/>
            Comprar Carrito
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
