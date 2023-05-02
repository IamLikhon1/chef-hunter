import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mt-5'>
            
            <Form className='w-25 mx-auto border  shadow-lg p-4 mb-5 bg-white rounded'>
                <h3 className='text-center text-warning'>Register</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter Name" required />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept term's and condition" />
                </Form.Group>
                <Button className='w-75 ms-4 fw-semibold ' variant="outline-info">Register</Button>
                <p className='mt-3'><small>Already Have Account ? Go TO <Link className='text-decoration-none text-warning fw-bold' to='/login'>Login</Link></small></p>
                </Form>
            
        </div>
    );
};

export default Register;