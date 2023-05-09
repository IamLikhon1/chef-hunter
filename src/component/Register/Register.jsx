import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [error,setError]=useState('')
    const{createUser}=useContext(AuthContext)

    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password,photo);

        if(password.length<6){
            setError('The password is less than 6 characters')
            
        }
        else{
            toast.success('Successfully Registered')
            setError('')
        }
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error)
        })
        form.reset()
    }
    
    return (
        <div>

            <Container>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col lg={6} sm>
                        <img className='w-100' src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1683619656~exp=1683620256~hmac=351c3a01b133845548eb9af977ea0ecca9f6e11b7478819933ea9172dcf6a13f' alt="" />
                    </Col>

                    <Col lg={6}sm>

                    <Form className='w-50' onSubmit={handleRegister}>
                <h3 className='text-center text-warning'>Register</h3>
                
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" required  placeholder="Enter Name" />
                    
               
                
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                    
                
                

                
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                    <span className='text-danger'>{error}</span>
                

               
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo URL" required />
                    
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept term's and condition" />
                </Form.Group>
                <Button type='submit' className='w-75 ms-4 fw-semibold ' variant="outline-info">Register</Button>
                <p className='mt-3'><small>Already Have Account ? Go TO <Link className='text-decoration-none text-warning fw-bold' to='/login'>Login</Link></small></p>
            </Form>
            
                    </Col>
                </Row>
            </Container>
            
           
        </div>
    );
};

export default Register;