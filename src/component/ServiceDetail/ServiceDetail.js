import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CarContext } from '../../App';

const ServiceDetail = () => {
    const [cars] = useContext(CarContext)
    const { carsId } = useParams();
    const navigate = useNavigate()
    const car = cars.find(car => car.id === carsId);
    console.log(cars)

    console.log(car)

    return (
        <div>
            <h2>details: {carsId}</h2>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default ServiceDetail;