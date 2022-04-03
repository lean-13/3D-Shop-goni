// react
import React, { useContext, useState }  from 'react';
// button
import ButtonVolver from '../buttons/ButtonVolver';
// item count
import ItemCount from './ItemCount'
// scss
import '../../scss/items/ItemDetail.scss'
import { CartContext } from '../../context/CartContext';

const initial = 1;

const ItemDetail = ({ProductDetail}) => {
    const {nombre, img, alt,descripcion, precio, stock, id} = ProductDetail;

    const { cart, AddItem} = useContext(CartContext);
    console.log(cart)

    const [cantidad, setCantidad] = useState(initial);

    const AddCart = (cantidad) => {
        const ItemToAdd = {
            id,
            nombre,
            precio,
            cantidad,
            img
        }
        AddItem(ItemToAdd)
    }

    return (
        <div className="detalleProducto">
            <h2 className='tituloScss'>Detalle de producto</h2>
            <ButtonVolver/>
            <div className='detalleProductoInfo'>
                <div>
                    <img  src={img} alt={alt} />
                </div>
                <div className='detalleProductotext textScss'>
                    <p className='nombreProducto'>{nombre}</p>
                    <p className='precioProducto'>Precio: ${precio}</p>
                    <p className='dimensionesProducto'>Dimensiones: </p>
                    <p className='descripcionProducto'>Descripcion: {descripcion}</p>
                    <div>
                        <ItemCount
                            OnAdd = {AddCart}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            stock = {stock}
                            />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail;