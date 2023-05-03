import React, {  useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Review from '../Review/Review';
import CardShow from '../CardShow/CardShow';
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {
    const [cards, setCards]=useState([]);
   

    useEffect(()=>{
        fetch('http://localhost:5000/allData')
        .then(res=>res.json())
        .then(data=>setCards(data))
        .catch(error=>console.error(error))
    },[])
   
    return (
        <div>
           {/* banner section start */}
           
            
                
           <Container>
           <Row className='d-flex align-items-center'>
              <Col lg={6} sm>
                <img className='w-100' src="https://img.freepik.com/free-vector/linear-flat-chef-logo-collection_23-2148985189.jpg?w=740&t=st=1683089342~exp=1683089942~hmac=3f0f00831c7ae3c25c56d859eb8a7970d2be8cad32a85c13114897a0c266903f" alt="" />
              </Col>


              <Col lg={6} sm>
                <h1 className='text-secondary fw-semibold mt-5 '>Traditional & Modern Service Since <span className='text-info'>1995</span></h1>
                <p className='mt-4 fw-semibold '>Ut neque turpis dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor morbi blandit ac vitae, dolor. Gravida eu vel ac luctus. Hac a vel est malesuada tellus sed nunc, etiam maecenas.</p>

                <Button className='mt-3 p-3 rounded fw-bold' variant="outline-secondary">Read More</Button>
              </Col>
              
            </Row>
           </Container>
          
            
          
          
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
                <h4 className='text-black'>“Since I was a kid I was Massimo Bottura — I was escaping from my older brother under the table in the kitchen and from down there, where my grandmother was defending me, in the meantime she was rolling pasta, i was looking at the world from another point of view. It’s what we do in Osteria Francescana every day.”</h4> <br />
                <p className='text-secondary fw-bold'>Massimo Bottura</p>
              </div>
           {/* Welcome ends */}

           {/* card section start */}
          <div className='mt-5 '>
          <h2 className='text-center fw-semibold text-secondary mt-3'>OUR BEST CHEF'S</h2>
            <Row className='ms-5'>
            {
                cards.map(allCard=><CardShow
                allCard={allCard}
                key={allCard.id}
                ></CardShow>)
            }
            </Row>
          </div>

           {/* card section ends */}



           {/* review section start */}

         <div className='mt-5'>
         <Review></Review>
         </div>
    
           {/* review section ends */}
            
        </div>
    );
};

export default Home;