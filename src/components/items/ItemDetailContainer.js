// react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// item detail
import ItemDetail from './ItemDetail'
// loader
import Loader from '../loader/Loader'
// fireBase
import { db } from '../../fireBase/config';
import { doc, getDoc } from 'firebase/firestore';
const ItemDetailContainer = () => {
    const [ProductDetail, SetProductDetail] = useState([]);
    const [Cargando, SetCargando] = useState([]);

    const {itemId} = useParams()

    
    useEffect(() => {
        SetCargando(true)

        const docRefer = doc(db, "productos", itemId)

        getDoc(docRefer)
            .then(doc => {
                const product = {id: doc.id, ...doc.data()}
                SetProductDetail(product)
            })
        
        // .then((res) => SetProductDetail(res.find((item) => item.id === Number(itemId))))
        .catch((error) => console.log(error))
        .finally(() => SetCargando(false))
    }, [itemId])

    return (
        
        <div>
            {Cargando ? <Loader/> : <ItemDetail ProductDetail = {ProductDetail} />}
        </div>
    )
}

export default ItemDetailContainer;