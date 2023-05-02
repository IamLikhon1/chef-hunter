import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const CardShow = ({allCard}) => {
    console.log(allCard)
    const {imgChef,name,experience,likes,recipes,id}=allCard
    return (
        <Container>
          <div className='container'>
           <Row className=" mt-3">
          <Card className='p-4 d-flex' >
            <Card.Img variant="top" className='w-25 fluid ' src={imgChef}  />
            <div>
            <Card.Body>
              <h4><Card.Title>Chef Name: {name}</Card.Title></h4>
              <Card.Text>
                <h4>Years of experience: {experience}</h4>
                <h5>Numbers of recipes: 3</h5>
                <h5>Likes: {likes}</h5>
              </Card.Text>
            </Card.Body>
            </div>
            <button className='btn btn-warning p-3 fw-bold text-white'>View Recipes Button</button>
          </Card>
    </Row>
        </div>
        </Container>
    );
};

export default CardShow;