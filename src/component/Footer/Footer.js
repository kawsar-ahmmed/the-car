import React from 'react';
import './Footer.css'
import { Container } from 'react-bootstrap';

const Footer = () => {
    const today = new(Date);
    const year = today.getFullYear()
    return (
        <Container className='text-center' fluid>
            <div className="footer-main">
                <p>Tis website build {year}</p>
            </div>
        </Container>
    );
};

export default Footer;