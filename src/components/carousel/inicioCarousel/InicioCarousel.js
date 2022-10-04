import React from "react";
import { Carousel } from 'react-bootstrap';
// scss
import './InicioCarousel.scss';

const InicioCarousel = () => {

    return (
        <div className="divInicioCarousel">
            <Carousel className="inicioCarousel">
                {/* agregar imagen de menor tamaño y ponerle un div con fondo de color */}
                <Carousel.Item className="inicioCarouselItem item3">
                    <img
                    className="d-block"
                    src={("https://firebasestorage.googleapis.com/v0/b/dshop-ca6b4.appspot.com/o/img%2Fcarrousel%2F3DEnvio.svg?alt=media&token=67762a4e-e135-4d1d-a7bf-d32fc154604b")}
                    alt="First slide"
                    />
                    <Carousel.Caption className="carouselDescripcion">
                    <p className="desc1">Todos los envios a partir de $5000 son gratis.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="inicioCarouselItem item2">
                    <img
                    className="d-block"
                    src={("https://firebasestorage.googleapis.com/v0/b/dshop-ca6b4.appspot.com/o/img%2Fcarrousel%2F3d-printer-3311587.jpg?alt=media&token=1043f672-08ec-4fe6-b179-17446ab6d9b2")}
                    alt="Second slide"
                    />
                    <Carousel.Caption className="carouselDescripcion">
                    <p className="desc2">Impresiones 3D de gran calidad.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default InicioCarousel;