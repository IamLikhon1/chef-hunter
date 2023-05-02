import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
                 <h4><Link className='text-decoration-none fw-semibold' to='/'>American <span className='text-warning'>Chef's</span> </Link></h4>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">

              
             <div className='d-flex align-items-center justify-content-center'>
             <h5><Link className='text-decoration-none ms-4 fw-semibold' to='/'>Home</Link></h5>
              <h5><Link className='text-decoration-none ms-4 fw-semibold' to='/blog'>Blog</Link></h5>
             </div>
              

             
            </Nav>
            <Nav>
             <button className='btn btn-primary'>Login</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;