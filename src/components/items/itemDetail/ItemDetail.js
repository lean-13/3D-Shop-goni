// react
import React, { useContext, useState }  from 'react';
// scss
import './ItemDetail.scss'
import { CartContext } from '../../../context/CartContext';
// button
import ButtonVolver from '../../buttons/botonVolver/ButtonVolver';
// item count
import ItemCount from '../itemCount/ItemCount';
// item count edit
import ItemCountEdit from '../itemCountEdit/ItemCountEdit';
// icono
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const initial = 1;

const ItemDetail = ({ProductDetail}) => {
    const {nombre, img, alt,descripcion, precio, stock, id} = ProductDetail;

    const { AddItem, IsInCart} = useContext(CartContext);

    const [cantidad, setCantidad] = useState(initial);

    const AddCart = (cantidad) => {
        const ItemToAdd = {
            id,
            nombre,
            precio,
            cantidad,
            img,
            stock
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
                                : <ItemCountEdit 
                                    cantidad={cantidad}
                                    id = {id}
                                    />
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
                <div>
                    <ButtonVolver/>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail;