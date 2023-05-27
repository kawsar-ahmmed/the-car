import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeSlider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://i.ibb.co/dtnf7mT/Mask-group-1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/*  */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/r5Ndhzy/Mask-group.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeSlider;