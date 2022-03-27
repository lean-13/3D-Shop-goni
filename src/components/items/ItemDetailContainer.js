// react
import React, { useEffect, useState } from 'react';
// item
import { GetProducts } from './FakeApi'
// item detail
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [ProductDetail, SetProductDetail] = useState([]);
    const [Cargando, SetCargando] = useState([]);
    
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