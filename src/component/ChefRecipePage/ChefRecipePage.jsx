import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { FaStar, FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';


const ChefRecipePage = () => {
    const [button, setButton]=useState(false)
    const [button1, setButton1]=useState(false)
    const [button2, setButton2]=useState(false)
    const allCard=useLoaderData()
    // console.log(data)
    const {imgChef,name,experience,likes,recipes,id,bio}=allCard;

    const btnFavorite=()=>{
        setButton(true)
        toast.success('Add Favorite Recipe')
    }
    const btnFavorite1=()=>{
        setButton1(true)
        toast.success('Add Favorite Recipe')
    }
    const btnFavorite2=()=>{
        setButton2(true)
        toast.success('Add Favorite Recipe')
    }
    return (
        
          <div>
              <Container  className='mt-4 d-flex align-items-center justify-content-center'>
            
            {/* card section */}
            
            <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={imgChef} className='fluid' />
            <Card.Body>
                <Card.Text>
                    <div>
                        <h4 className='fw-semibold'>Chef Name: {name}</h4>
                        <h5 className='mt-2'>About Myself: {bio}</h5>
                        <div className='d-flex mt-3 align-items-center '>
                          <h5 className='d-flex align-items-center'>Likes: <FaThumbsUp className='m-2'></FaThumbsUp> {likes}</h5>
                            <h5 className='ms-4'>Number of Recipes: 3 </h5>
                        </div>
                        <h6>Experience: {experience} </h6>

                    </div>
                
                </Card.Text>
               
            </Card.Body>
            </Card>
            
            {/* card section */}

        </Container>
        {/* recipes section */}

        <Container className='d-flex align-items-center justify-content-center mt-5 '>
       <Marquee speed={100} pauseOnHover={true}>
       <Card className='me-5' style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title> Recipe Name: {recipes.first.name}</Card.Title>
                <Card.Text>
                <p className='fw-semibold'>Ingredients</p>               
                <ol>
                    <li>Steak</li>
                    <li>Lemon</li>
                    <li>Garlic</li>
                    <li>Salt</li>
                    <li>Olive oil</li>
                </ol>
                <p className='fw-semibold'>Cooking Method: {recipes.first.method}</p>
               
                <p className='fw-semibold'>Rating: <span className='text-warning'>{recipes.first.rating}</span></p>
                </Card.Text>
                <Button onClick={btnFavorite} disabled={button} className='w-50 text-white ' variant="warning">Favorite</Button>
            </Card.Body>
            </Card>

        <Card className='me-5' style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title> Recipe Name: {recipes.second.name}</Card.Title>
                <Card.Text>
                <p className='fw-semibold'>Ingredients</p>
                <ol>
                    <li>Pepperoni</li>
                    <li>Cheese</li>
                    <li>Tomato Sauce</li>
                    <li>Salt</li>
                    <li>Olive oil</li>
                </ol>
                <p className='fw-semibold'>Cooking Method: {recipes.second.method}</p>
                <p className='fw-semibold'>Rating: <span className='text-warning'> {recipes.second.rating}</span></p>
                </Card.Text>
                <Button onClick={btnFavorite1} disabled={button1}  className='w-50 text-white'  variant="warning">Favorite</Button>
            </Card.Body>
            </Card>

        <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title> Recipe Name: {recipes.third.name}</Card.Title>
                <Card.Text>
                <p className='fw-semibold'>Ingredients</p>
                <ol>
                    <li>Chicken</li>
                    <li>Onion</li>
                    <li>Vinegar</li>
                    <li>Garlic Paste</li>
                    <li>Soy Sauce</li>
                </ol>
                <p className='fw-semibold'>Cooking Method: {recipes.third.method}</p>
                <p className='fw-semibold'>Rating:  <span className='text-warning'> {recipes.third.rating}</span></p> 
                </Card.Text>
                <Button onClick={btnFavorite2} disabled={button2}  className='w-50 text-white'  variant="warning">Favorite</Button>
            </Card.Body>
            </Card>

       </Marquee>

        </Container>

        {/* recipes section */}
          </div>
       
    );
};

export default ChefRecipePage;