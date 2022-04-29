// react
import React, { useContext, useState } from "react";
// scss
import "./ItemDetail.scss";
import { CartContext } from "../../../context/CartContext";
// button
import ButtonVolver from "../../buttons/botonVolver/ButtonVolver";
// item count
import ItemCount from "../itemCount/ItemCount";
// item count edit
import ItemCountEdit from "../itemCountEdit/ItemCountEdit";




const ItemDetail = ({ ProductDetail }) => {
  const { nombre, img, alt, descripcion, precio, stock, id } = ProductDetail;

  const initial = (stock) => {
    if (stock === 0) {
        return 0
    }else {
            return 1
        }
    }

  const { AddItem, IsInCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(initial(stock));

  const AddCart = (cantidad) => {
    const ItemToAdd = {
      id,
      nombre,
      precio,
      cantidad,
      img,
      stock,
    };
    cantidad > 0 && AddItem(ItemToAdd);
  };

  return (
    <div className="detalleProducto" key={id}>
      <h2 className="tituloScss">Detalle de producto</h2>
      <div className="detalleProductoInfo">
        <div>
          <img src={img} alt={alt} />
        </div>
        <div className="detalleProductotext textScss">
          <p className="nombreProducto">{nombre}</p>
          <p className="precioProducto">Precio: ${precio}</p>
          <p className="dimensionesProducto">Dimensiones: </p>
          <p className="descripcionProducto">Descripcion: {descripcion}</p>
          {stock === 0 && <p className="encargoProducto">Sin stock</p>}
          <div>
            {!IsInCart(id) ? (
              <ItemCount
                OnAdd={AddCart}
                cantidad={cantidad}
                setCantidad={setCantidad}
                stock={stock}
              />
            ) : (
              <ItemCountEdit cantidad={cantidad} id={id} />
            )}
          </div>
        </div>
        <div>
          <ButtonVolver />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
