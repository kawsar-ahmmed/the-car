import React from 'react';
import { Col } from 'react-bootstrap';
import './Cars.css'
import { Button } from 'bootstrap';

const Cars = ({ car }) => {
    const { title, imageUrl, description, price } = car;
    // console.log(car);
    const handleCardButton = () => {
        const x = 0;
        const news = x + 1;
        console.log(news)
    }



    return (
        <Col lg={4}>
            <div className="card-main">
                <img className='img-fluid' src={imageUrl} alt="" />
                <div className="card-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span>Price {price}</span>
                    <div className="card-button">
                        <button onClick={handleCardButton}>View Details</button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Cars;