// react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// item
import { GetProducts } from './FakeApi'
// item detail
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [ProductDetail, SetProductDetail] = useState([]);
    const [Cargando, SetCargando] = useState([]);
    const {itemId} = useParams()
    console.log(itemId)
    
    useEffect(() => {
        SetCargando(true)
        GetProducts
        .then((res) => SetProductDetail(res.find((item) => item.id === 4)))
        .catch((error) => console.log(error))
        .finally(() => SetCargando(false))
    }, [])

    return (
        
        <div>
            {Cargando ? <p>Cargando...</p> : <ItemDetail ProductDetail = {ProductDetail} />}
        </div>
    )
}

export default ItemDetailContainer;