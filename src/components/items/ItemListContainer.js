// react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// sass
import '../../scss/items/ItemListContainer.scss';
import ItemList from './ItemList';
// item
import { GetProducts } from './FakeApi';
// loader
import Loader from '../loader/Loader'
const ItemListContainer = ({nombre, categoria, precio, stock}) => {

    const [ListaProductos , SetListaProductos] = useState([]);
    const [Cargando, SetCargando] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
      SetCargando(true);
      GetProducts
      .then((res) => {

            if (categoriaId) {
                SetListaProductos( res.filter( (prod) => prod.categoria === categoriaId ));
            }else {
                SetListaProductos(res);
            }
      })
      .catch((error) => console.log(error))
      .finally(() => SetCargando(false))
    }, [categoriaId])
    return (
        <div className='productos'>
            <h5>Productos</h5>
            <div>
              {Cargando ? <Loader/> : ''}
              <ItemList ListaProductos={ListaProductos}/>
            </div>
        </div>

    );
}

export default ItemListContainer;