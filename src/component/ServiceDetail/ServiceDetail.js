import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CarContext } from '../../App';

const ServiceDetail = () => {
    const carDetails = useContext(CarContext)
    const {carsId} = useParams();
    const navigate = useNavigate()
    console.log(carDetails)
    return (
        <div>
            <h2>details: {carsId}</h2>
            <button onClick={()=> navigate(-1)}>Back</button>
        </div>
    );
};

export default ServiceDetail;