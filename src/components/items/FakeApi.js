const Productos = [
    {
        id: 1,
        nombre: "Maceta de venus y afrodita",
        categoria: "Hogar",
        descripcion: "Maceta de las Diosas del amor, la belleza y la fertilidad",
        precio: 4000,
        stock: 5,
        img: require("../../img/productos/1.jpg"),
        alt: "img maceta diosas del amor"
      },
      {
        id: 2,
        nombre: "Casa para pajaros caravana",
        categoria: "Hogar",
        descripcion: "casa pajaros con forma de caravana perfecta para tu hogar",
        precio: 1200,
        stock: 2,
        img: require("../../img/productos/2.jpg"),
        alt: "img casa de pajaros"
      },
      {
        id: 3,
        nombre: "Lampara articulada star wars",
        categoria: "Hogar",
        descripcion: "lampara del famoso caza tie fighter",
        precio: 3000,
        stock: 4,
        img: require("../../img/productos/3.jpg"),
        alt: "img lampara star wars"
      },
      {
        id: 4,
        nombre: "Soporte de esponja con forma de bob esponja",
        categoria: "Hogar",
        descripcion: "ideal para darle un aire fresco a tu cocina",
        precio: 800,
        stock: 4,
        img: require("../../img/productos/4.jpg"),
        alt: "img soporte de bob esponja"
      },
      {
        id: 5,
        nombre: "Organizador de cables en forma de panal",
        categoria: "Organizadores",
        descripcion: "Perfecta para no perder tus cables",
        precio: 500,
        stock: 0,
        img: require("../../img/productos/5.jpg"),
        alt: "img organizador"
      }
    ]

  
    export const GetProducts = new Promise((resolve, reject) => {
      let condicion = true;
      if (condicion) {
        setTimeout(() => {
          resolve(Productos)
        }, 2000)
      }else {
        reject('error')
      }
    })