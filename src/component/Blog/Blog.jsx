import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const Blog = () => {
    const{loading}=useContext(AuthContext)
    if(loading){
        return <Spinner animation="border" variant="warning" />
    }
    return (
        <div>
           <h2 className='text-center fw-bold '>Answer to the question:</h2>

           <h4 className='bg-warning fw-semibold p-1'>1.Tell us the differences between uncontrolled and controlled components.</h4>
           <h5>Ans: In a controlled component react, state handles all the form data, whereas, in an uncontrolled component, the HTML form element data is managed by only the DOM.</h5>

           <h4 className='bg-warning fw-semibold p-1'>2.How to validate React props using PropTypes</h4>
           <h5>Ans: propTypes is used for props validation.With any : The prop can be of any data type: bool,number,string,func,array,object.
            </h5>

           <h4 className='bg-warning fw-semibold p-1'>3.Tell us the difference between nodejs and express js</h4>
           <h5>Ans: NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
            </h5>

           <h4 className='bg-warning fw-semibold p-1'>4.What is a custom hook, and why will you create a custom hook?</h4>
           <h5>Ans: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.The main reason to write a custom hook is for code reusability.
            </h5>
            


        </div>
    );
};

export default Blog;