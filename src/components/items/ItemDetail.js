// react
import React from 'react';
// button
import ButtonVolver from '../buttons/ButtonVolver';
// item count
import ItemCount from './ItemCount'
// scss
import '../../scss/items/ItemDetail.scss'

const initial = 1;


const OnAdd = (contador) => {
    alert('stock: ' + contador)
    console.log(contador)
}

const ItemDetail = ({ProductDetail}) => {
    const {nombre, categoria, img, alt,descripcion, precio, stock} = ProductDetail;

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
                    <p className='stockProducto'>Stock: {stock}</p>
                    <p className='categoriaProducto'>Categoria: {categoria}</p>
                    <p className='descripcionProducto'>Descripcion: {descripcion}</p>
                    <div>
                        <ItemCount
                            initial = {initial}
                            OnAdd = {OnAdd}
                            stock = {stock}
                            />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail;