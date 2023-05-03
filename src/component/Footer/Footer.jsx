import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from 'react-icons/fa';
const Footer = () => {
    return (
      <div className='bg-black p-5 mt-5'>
         <Container >
         <Row className='text-white'>
            <Col lg={6}>
                <h3 className='text-warning mt-5'>Working Hours</h3>
                <h6> <span className='text-info mt-4'>Mon – Fri</span>: 7.00am – 6.00pm</h6>
                <h6> <span className='text-info mt-4'>Sat</span>: 7.00am – 5.00pm</h6>
                <h6> <span className='text-info mt-4'>Sun</span>: 8.00am – 6.00pm</h6>
            </Col>

            <Col lg={6}>
            <div className='text-center mt-5'>
            <p className='test-secondary fw-bold'><small>Copyrights © 2023 American ChefZone. Designed by Md.Asaduzzaman</small></p>
            <div className='hover:text-warning'  style={{fontSize:"30px"}}>
                <FaFacebookSquare   className='ms-3' ></FaFacebookSquare>
                <FaInstagramSquare  className='ms-3'  ></FaInstagramSquare>
                <FaTwitterSquare    className='ms-3' >  </FaTwitterSquare>
            </div>
            
        </div>
            </Col>
         </Row>
       </Container>
      </div>
    );
};

export default Footer;