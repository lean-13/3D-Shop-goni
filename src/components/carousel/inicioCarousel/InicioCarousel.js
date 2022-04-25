import React from "react";
import { Carousel } from 'react-bootstrap';
// scss
import './InicioCarousel.scss';
const InicioCarousel = () => {

    return (
        <div className="divInicioCarousel">
            <Carousel className="inicioCarousel">
                {/* agregar imagen de menor tamaño y ponerle un div con fondo de color */}
                <Carousel.Item className="inicioCarouselItem">
                    <img
                    className="d-block"
                    src={("../../../../img/carousel/3d-printer-3311587.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption className="carouselDescripcion">
                    <p className="desc1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="inicioCarouselItem">
                    <img
                    className="d-block"
                    src={("../../../../img/carousel/3d-printer-3311587.png")}
                    alt="Second slide"
                    />
                    <Carousel.Caption className="carouselDescripcion">
                    <p className="desc2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="inicioCarouselItem">
                    <img
                    className="d-block"
                    src={("../../../../img/carousel/3d-printer-3311587.png")}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="carouselDescripcion">
                    <p className="desc3">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default InicioCarousel;