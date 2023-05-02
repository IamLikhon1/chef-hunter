import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const {userLogIn,auth}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname||'/'
    
    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

       
        userLogIn(email,password).then(result=>{
            const logIn=result.user;
            console.log(logIn)
            navigate(from,{replace:true})
            toast.success('Wow!! Login')
        })
        .catch(error=>{
            console.log(error)
        })
        form.reset()
    }

    // google login
    const googleLogin=()=>{
        const googleProvider=new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const google=result.user;
            console.log(google)
            navigate(from,{replace:true})
            toast.success('Wow!! Login')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    // github login
    const gitHubLogin=()=>{
        const gitHubProvider=new GithubAuthProvider();
        signInWithPopup(auth,gitHubProvider)
        .then(result=>{
            const google=result.user;
            console.log(google)
            navigate(from,{replace:true})
            toast.success('Wow!! Login')
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className='mt-5'>
            <Form onSubmit={handleLogin} className='w-25 mx-auto border  shadow-lg p-4 mb-5 bg-white rounded'>
                <img className='w-50 ms-5  mx-auto  h-25 rounded mb-4' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1683036474~exp=1683037074~hmac=d2a7670ed4f9f350a16a64680c14f89c261b8b90246302bd4242fed60f537867" alt="" />
                <h3 className='text-center'>Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept term's and condition" />
                </Form.Group>
                <Button type='submit' className='w-75 ms-4 fw-semibold ' variant="outline-info">Login</Button>
                <p className='text-center fw-semibold mt-3'>Or</p>
                <hr />
                <div className='w-75 ms-5'>
                <button onClick={googleLogin}  className='btn  btn-warning fw-semibold text-white'> <FaGoogle></FaGoogle> Sign in With Google</button>
                <button onClick={gitHubLogin}  className='btn mt-3 btn-success  fw-semibold text-white'> <FaGithub></FaGithub> Sign in With GitHub</button>
                </div>
               
                <p className='mt-3'><small>Don't Have Account ? Go To <Link className='text-decoration-none text-warning fw-bold' to='/register'>Register</Link></small></p>
                
                </Form>
                
            
        </div>
    );
};

export default Login;