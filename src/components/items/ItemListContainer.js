// react
import React, { useEffect, useState } from 'react';
// sass
import '../../scss/header.scss'
// item count
import ItemCount from './ItemCount'
import {ItemList} from './ItemList';
const initial = 1;

const ProductoData = [
    {
        nombre: "maceta de venus y afrodita",
        descripcion: "maceta de las Diosas del amor, la belleza y la fertilidad",
        precio: 4000,
        stock: 5,
        img: require("../../img/productos/1.jpg"),
        alt: "img maceta diosas del amor"
      },
      {
        nombre: "Casa para pajaros caravana",
        descripcion: "casa pajaros con forma de caravana perfecta para tu hogar",
        precio: 1200,
        stock: 2,
        img: require("../../img/productos/2.jpg"),
        alt: "img casa de pajaros"
      },
      {
        nombre: "Lampara articulada star wars",
        descripcion: "lampara del famoso caza tie fighter",
        precio: 3000,
        stock: 4,
        img: require("../../img/productos/3.jpg"),
        alt: "img lampara star wars"
      },
      {
        nombre: "soporte de esponja con forma de bob esponja",
        descripcion: "ideal para darle un aire fresco a tu cocina",
        precio: 800,
        stock: 4,
        img: require("../../img/productos/4.jpg"),
        alt: "img soporte de bob esponja"
      }
]

const OnAdd = (contador) => {
    alert('stock: ' + contador)
    console.log(contador)
}

const ItemListContainer = ({nombre, categoria, precio, stock}) => {

    const [ListaProductos , SetListaProductos] = useState([])
    const GetData = new Promise((resolve, reject) => {
      let condicion = true;
      if (condicion) {
        setTimeout(() => {
          resolve(ProductoData)
        })
      }else {
        reject('error')
      }
    })
    useEffect(() => {
      GetData
      .then((res) => SetListaProductos(res))
      .catch((error) => console.log(error))
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
                <ItemList ListaProductos={ListaProductos}/>
            </div>
        </div>

    );
}

export default ItemListContainer;