import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Slider.css';

function Slider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <Carousel className="carosalview" fade variant = "dark" nextLabel = "" prevLabel = "">
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    height="800px"
                    width="100%"
                    src="./images/web/1.jpg"
                    alt="First Slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="800px"
                    width="100%"
                    src="./images/web/2.jpg"
                    alt="Second Slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="800px"
                    width="100%"
                    src="./images/web/3.jpg"
                    alt="Third Slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="800px"
                    width="100%"
                    src="./images/web/4.jpg"
                    alt="Fourth Slide"
                />
            </Carousel.Item>
        </Carousel>

    );
}
export default Slider