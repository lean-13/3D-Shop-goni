import React from "react";
import { Carousel } from 'react-bootstrap';
// scss
import './CategoriaCarousel.scss';
const CategoriaCarousel = () => {

    return (
        <div className="divCategoriaCarousel">
            <Carousel className="categoriaCarousel">
                {/* agregar imagen de menor tamaño y ponerle un div con fondo de color */}
                <Carousel.Item className="categoriaCarouselItem itemcategoria1">
                    <img
                    className="d-block"
                    src={("https://firebasestorage.googleapis.com/v0/b/dshop-ca6b4.appspot.com/o/img%2Fcarrousel%2F3d-printer-3311587.jpg?alt=media&token=1043f672-08ec-4fe6-b179-17446ab6d9b2")}
                    alt="First slide"
                    />
                    <Carousel.Caption className="carouselCategoriaDescripcion">
                    <p className="categoriaDesc1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="categoriaCarouselItem itemcategoria2">
                    <img
                    className="d-block"
                    src={("https://firebasestorage.googleapis.com/v0/b/dshop-ca6b4.appspot.com/o/img%2Fcarrousel%2F3d-printer-3311587.jpg?alt=media&token=1043f672-08ec-4fe6-b179-17446ab6d9b2")}
                    alt="Second slide"
                    />
                    <Carousel.Caption className="carouselCategoriaDescripcion">
                    <p className="categoriaDesc2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CategoriaCarousel;