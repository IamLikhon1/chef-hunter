import React from 'react';
import {  Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const CardShow = ({allCard}) => {
   
    const {imgChef,name,experience,likes,recipes,id}=allCard
    return (
         
       <Col className='mt-5' lg={4}>
          <Card className='p-4 w-75 ' >
            <LazyLoad><Card.Img variant="top" className='w-50 fluid ' src={imgChef}  /></LazyLoad>
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
           <Link to={`/allData/${id}`}> <button className='btn btn-warning p-3 fw-bold text-white'>View Recipes</button></Link>
          </Card>
    
       </Col>
        
    );
};

export default CardShow;