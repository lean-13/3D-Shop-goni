// react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// firebase
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { db } from '../../../fireBase/config';
// sass
import './ItemListContainer.scss';
import ItemList from '../itemList/ItemList';
// loader
import Loader from '../../loader/Loader'
const ItemListContainer = () => {

    const [ListaProductos , SetListaProductos] = useState([]);
    const [Cargando, SetCargando] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
      SetCargando(true);

      const productoRef = collection( db, "productos");
      const queryFilter = categoriaId ? 
        query(productoRef, 
        where('categoria', '==', categoriaId)
        ) : query(productoRef, limit(4))
      getDocs(queryFilter)
         .then((res) => {
            const items = res.docs.map((doc) => ({id: doc.id, ...doc.data()})) 
            SetListaProductos(items);
         })
      .catch((error) => console.log(error))
      .finally(() => SetCargando(false))
    }, [categoriaId])

    return (
        <div className='divProductos'>
            <div className='productos'>
                {categoriaId === undefined ? <h5>Productos</h5> : <h5>{categoriaId}</h5>}
                <div>
                    {Cargando ? <Loader/> : ''}
                    <ItemList 
                        ListaProductos={ListaProductos}
                        Cargando={Cargando}
                        Categoria={categoriaId}
                    />
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;