import React, { useContext, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { CarContext } from '../../App';
import Cars from '../Cars/Cars';
import './Home.css'
import HomeSlider from '../Cars/HomeSlider';


const Home = () => {
    const [cars, setCar] = useContext(CarContext);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCar(data))
    }, [setCar])
    // console.log(cars)

    return (
        <>
            <div className="slider-full">
                <HomeSlider></HomeSlider>
            </div>
            <Container>
                <div className="section-main">
                    <Row>
                        {
                            Array.isArray(cars) ? (
                                cars.map((car) => (
                                    <Cars key={car.id} car={car} />
                                ))
                            ) : (
                                <p>Loading...</p> // or any other appropriate loading indicator
                            )
                        }
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Home;