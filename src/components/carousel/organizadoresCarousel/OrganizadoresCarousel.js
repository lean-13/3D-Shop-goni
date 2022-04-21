import React from "react";
import { Carousel } from 'react-bootstrap';
// scss
import './HogarCarousel.scss';
const HogarCarousel = () => {

    return (
        <div className="divInicioCarousel">
            <Carousel className="inicioCarousel">
                <Carousel.Item className="inicioCarouselItem">
                    <img
                    className="d-block w-100"
                    src={("../../../../img/carousel/3d-printer-3311587.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="inicioCarouselItem">
                    <img
                    className="d-block w-100"
                    src={("../../../../img/carousel/3d-printer-3311587.png")}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="inicioCarouselItem">
                    <img
                    className="d-block w-100"
                    src={("../../../../img/carousel/3d-printer-3311587.png")}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HogarCarousel;