// react
import React, { useContext, useState }  from 'react';
// scss
import '../../scss/items/ItemDetail.scss'
import { CartContext } from '../../context/CartContext';
// button
import ButtonVolver from '../buttons/ButtonVolver';
// item count
import ItemCount from './ItemCount';
// item count edit
import ItemCountEdit from './ItemCountEdit';
// icono
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const initial = 1;

const ItemDetail = ({ProductDetail}) => {
    const {nombre, img, alt,descripcion, precio, stock, id} = ProductDetail;

    const { cart, AddItem, IsInCart} = useContext(CartContext);
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
        cantidad > 0 && AddItem(ItemToAdd)
    }

    const botonEncargarProductoConfig = {
        className: `botonEncargarCarrito ${stock === 0 ? 'botonEncargarCarritoColor' : 'botonEncargarCarritoColorBlock'}`,
        disabled: stock > 0

    }
    return (
        <div className="detalleProducto" key={id}>
            <h2 className='tituloScss'>Detalle de producto</h2>
            <ButtonVolver/>
            <div className='detalleProductoInfo'>
                <div>
                    <img src={img} alt={alt} />
                </div>
                <div className='detalleProductotext textScss'>
                    <p className='nombreProducto'>{nombre}</p>
                    <p className='precioProducto'>Precio: ${precio}</p>
                    <p className='dimensionesProducto'>Dimensiones: </p>
                    <p className='descripcionProducto'>Descripcion: {descripcion}</p>
                    {stock === 0 && <p className='encargoProducto'>Sin stock, solo disponible para encargos</p>}
                    <div>
                        {
                        stock > 0 ?
                            <>
                            {
                                !IsInCart(id)
                                    ?<ItemCount
                                    OnAdd = {AddCart}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    stock = {stock}
                                    />
                                : <ItemCountEdit/>
                            }
                            </>
                             : 
                
                            <button {...botonEncargarProductoConfig}>
                                <AddShoppingCartIcon className='iconoAddCart'/>
                                Encargar Producto
                            </button>
                            
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail;