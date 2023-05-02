import React from 'react';
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='text-center mb-5'>
            <p className='test-secondary fw-bold'><small>Copyrights © 2023 American ChefZone. Designed by Md.Asaduzzaman</small></p>
            <div  style={{fontSize:"30px"}}>
                <FaFacebookSquare  className='ms-3' ></FaFacebookSquare>
                <FaInstagramSquare className='ms-3'  ></FaInstagramSquare>
                <FaTwitterSquare   className='ms-3' >  </FaTwitterSquare>
            </div>
            
        </div>
    );
};

export default Footer;