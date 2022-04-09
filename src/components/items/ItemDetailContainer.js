// react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// item
import { GetProducts } from './FakeApi'
// item detail
import ItemDetail from './ItemDetail'
// loader
import Loader from '../loader/Loader'
const ItemDetailContainer = () => {
    const [ProductDetail, SetProductDetail] = useState([]);
    const [Cargando, SetCargando] = useState([]);

    const {itemId} = useParams()

    
    useEffect(() => {
        SetCargando(true)
        GetProducts
        .then((res) => SetProductDetail(res.find((item) => item.id === Number(itemId))))
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