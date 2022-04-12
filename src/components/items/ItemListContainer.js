// react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// firebase
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../fireBase/config';
// sass
import '../../scss/items/ItemListContainer.scss';
import ItemList from './ItemList';
// loader
import Loader from '../loader/Loader'
const ItemListContainer = ({nombre, categoria, precio, stock}) => {

    const [ListaProductos , SetListaProductos] = useState([]);
    const [Cargando, SetCargando] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
      SetCargando(true);

      const productoRefencia = collection( db, "productos");
      getDocs(productoRefencia)
         .then((res) => {
            const items = res.docs.map((doc) => ({id: doc.id, ...doc.data()})) 
            console.log(items)
            
            if (categoriaId) {
                SetListaProductos( items.filter( (prod) => prod.categoria === categoriaId ));
            }else {
                SetListaProductos(items);
            }
         })
      .catch((error) => console.log(error))
      .finally(() => SetCargando(false))
    }, [categoriaId])
    return (
        <div className='divProductos'>
            <div className='productos'>
                <h5>Productos</h5>
                <div>
                    {Cargando ? <Loader/> : ''}
                    <ItemList ListaProductos={ListaProductos}/>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;