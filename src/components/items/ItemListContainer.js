// react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// sass
import '../../scss/items/ItemListContainer.scss'
// item count
import ItemCount from './ItemCount'
import ItemList from './ItemList';
// item
import { GetProducts } from './FakeApi'

const initial = 1;


const OnAdd = (contador) => {
    alert('stock: ' + contador)
    console.log(contador)
}

const ItemListContainer = ({nombre, categoria, precio, stock}) => {

    const [ListaProductos , SetListaProductos] = useState([]);
    const [Cargando, SetCargando] = useState([]);

    const {categoriaId} = useParams()

    useEffect(() => {
      SetCargando(true);
      GetProducts
      .then((res) => {

            if (categoriaId) {
                SetListaProductos( res.filter( (prod) => prod.categoria === categoriaId ) )
            }else {
                SetListaProductos(res)
            }
      })
      .catch((error) => console.log(error))
      .finally(() => SetCargando(false  ))
    }, [])
    return (
        <div>
            <div className="itemProductoInfo">
                <h3>Productos: </h3>
                <strong>producto: {nombre}</strong>
                <strong>categoria: {categoria}</strong>
                <strong>precio: ${precio}</strong>
                <strong>stock: {stock}</strong>
            </div>
            <div>
                <ItemCount
                    initial = {initial}
                    OnAdd = {OnAdd}
                    stock = {stock}
                    />
            </div>
            <div>
              {Cargando ? <p>Cargando...</p> : ''}
              <ItemList ListaProductos={ListaProductos}/>
            </div>
        </div>

    );
}

export default ItemListContainer;