import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Home = () => {
   
    return (
        <div>
           {/* banner section start */}
          
           <Image  className='w-100 mt-5' src="https://img.freepik.com/free-photo/life-style_1122-1996.jpg?w=740&t=st=1682997985~exp=1682998585~hmac=f7f2720169ddbe40831e324a38257e6cd3d6ab143c1bca3506c5337870ab2180" fluid />;
          
           {/* banner section ends */}

           {/* Welcome start */}
                <h1 className=' mt-5 text-center fw-semibold'>--Welcome--</h1>
              <div className='text-center mt-4'>
              <Container >
                <Row>
                    <Col lg={4} sm>
                        <h3 className='text-warning fw-semibold'>1995</h3>
                        <h5 className='text-secondary fw-medium'>Opens Osteria Francescana, Via Stella 22 Modena Italy</h5>

                    </Col>
                    <Col lg={4} sm>  <h3 className='text-info fw-semibold'>2002</h3>
                        <h5 className='text-secondary fw-medium'>Michelin Guide One-Michelin-Star. Gambero Rosso Up and Coming Chef Award.</h5></Col>


                    <Col lg={4} sm>  <h3 className='text-success fw-semibold'>2016</h3>
                        <h5 className='text-secondary fw-medium'>The world’s 50 restaurants 1st best restaurant in the world. Michelin Guide three-michelin-stars.</h5></Col>
                </Row>
                </Container>
              </div>

              <div className='text-center mt-4 ps-3'>
                <h4 className='text-secondary'>“Since I was a kid I was Massimo Bottura — I was escaping from my older brother under the table in the kitchen and from down there, where my grandmother was defending me, in the meantime she was rolling pasta, i was looking at the world from another point of view. It’s what we do in Osteria Francescana every day.”</h4> <br />
                <p className='text-secondary fw-bold'>Massimo Bottura</p>
              </div>
           {/* Welcome ends */}

           {/* card section start */}


           {/* card section ends */}

           {/* review section start */}
           
           {/* review section ends */}
            
        </div>
    );
};

export default Home;