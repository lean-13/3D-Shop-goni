// react
import React, { useEffect, useState } from 'react';
// sass
import '../../scss/header.scss'
// item count
import ItemCount from './ItemCount'
import ItemList from './ItemList';
const initial = 1;


const OnAdd = (contador) => {
    alert('stock: ' + contador)
    console.log(contador)
}

const ItemListContainer = ({nombre, categoria, precio, stock}) => {

  const Productos = [
    {
        id: 1,
        nombre: "maceta de venus y afrodita",
        descripcion: "maceta de las Diosas del amor, la belleza y la fertilidad",
        precio: 4000,
        stock: 5,
        img: require("../../img/productos/1.jpg"),
        alt: "img maceta diosas del amor"
      },
      {
        id: 2,
        nombre: "Casa para pajaros caravana",
        descripcion: "casa pajaros con forma de caravana perfecta para tu hogar",
        precio: 1200,
        stock: 2,
        img: require("../../img/productos/2.jpg"),
        alt: "img casa de pajaros"
      },
      {
        id: 3,
        nombre: "Lampara articulada star wars",
        descripcion: "lampara del famoso caza tie fighter",
        precio: 3000,
        stock: 4,
        img: require("../../img/productos/3.jpg"),
        alt: "img lampara star wars"
      },
      {
        id: 4,
        nombre: "soporte de esponja con forma de bob esponja",
        descripcion: "ideal para darle un aire fresco a tu cocina",
        precio: 800,
        stock: 4,
        img: require("../../img/productos/4.jpg"),
        alt: "img soporte de bob esponja"
      }
    ]

    const [ListaProductos , SetListaProductos] = useState();
    const GetData = new Promise((resolve, reject) => {
      let condicion = true;
      if (condicion) {
        setTimeout(() => {
          resolve(Productos)
        }, 0)
      }else {
        reject('error')
      }
    })
    useEffect(() => {
      GetData.then((res) => SetListaProductos(res))
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