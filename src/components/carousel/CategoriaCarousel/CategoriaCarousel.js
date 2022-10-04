import React from "react";
import { Carousel } from 'react-bootstrap';
// scss
import './CategoriaCarousel.scss';
const CategoriaCarousel = () => {

    return (
        <div className="divCategoriaCarousel">
            <Carousel className="categoriaCarousel">
                <Carousel.Item className="categoriaCarouselItem itemcategoria1">
                    <img
                    className="d-block"
                    src={("https://firebasestorage.googleapis.com/v0/b/dshop-ca6b4.appspot.com/o/img%2Fcarrousel%2Forganizador3D.jpg?alt=media&token=477c4e8a-abcb-4300-9b22-031c67d57890")}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="categoriaCarouselItem itemcategoria2">
                    <img
                    className="d-block"
                    src={("https://firebasestorage.googleapis.com/v0/b/dshop-ca6b4.appspot.com/o/img%2Fcarrousel%2Fhogar3DCE.jpg?alt=media&token=ea451bc1-2b71-4451-9867-09d380193e20")}
                    alt="Second slide"
                    />
                    <Carousel.Caption className="carouselCategoriaDescripcion">
                    <p className="categoriaDesc2">.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CategoriaCarousel;