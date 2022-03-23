// react
import React from 'react';
// sass

// item
import { Item } from './Item'

const ProductoData = [
    {
        nombre: "maceta de venus y afrodita",
        descripcion: "maceta de las Diosas del amor, la belleza y la fertilidad",
        precio: 4000,
        stock: 5,
        img: require("../../img/productos/1.jpg")
      },
      {
        nombre: "Casa para pajaros caravana",
        descripcion: "casa pajaros con forma de caravana perfecta para tu hogar",
        precio: 1200,
        stock: 2,
        img: require("../../img/productos/2.jpg")
      },
      {
        nombre: "Lampara articulada star wars",
        descripcion: "lampara del famoso caza tie fighter",
        precio: 3000,
        stock: 4,
        img: require("../../img/productos/3.jpg")
      },
      {
        nombre: "soporte de esponja con forma de bob esponja",
        descripcion: "ideal para darle un aire fresco a tu cocina",
        precio: 800,
        stock: 4,
        img: require("../../img/productos/4.jpg")
      }
]

export const ItemList = () => {
    return (
        <div>
            {
                ProductoData.map((item) => (
                    <Item nombre={item.nombre} precio={item.precio} img={item.img} stock={item.stock} categoria={item.categoria} descripcion={item.descripcion}/>
                ))
            }
        </div>
    )
};
