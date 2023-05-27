import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './Cars.css'
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';

const Cars = ({ car }) => {
    const [cart, setCart] = useState(0);
    const { title, imageUrl, description, price, id } = car;
const navigate = useNavigate()
    //
    const handleCardButton = id => {
        navigate(`cars/${id}`)
    }


    return (
        <Col lg={4}>
            <div className="card-main">
                <img className='img-fluid' src={imageUrl} alt="" />
                <div className="card-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span>Price {price}</span>
                    Count {cart}
                    <div className="card-button">
                        <button onClick={()=> handleCardButton (id)}>View Details</button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Cars;