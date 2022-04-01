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
        <div className="DetalleProducto">
            <h2>Detalle de producto</h2>
            <ButtonVolver/>
            <div className='DetalleProductoInfo'>
                <div>
                    <img  src={img} alt={alt} />
                </div>
                <div className='DetalleProductotext'>
                    <p>{nombre}</p>
                    <p>Precio: ${precio}</p>
                    <pt>Stock: {stock}</pt>
                    <p>Categoria: {categoria}</p>
                    <p>Descripcion: {descripcion}</p>
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