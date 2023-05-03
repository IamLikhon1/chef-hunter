import React, { useContext } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  const {user,userLogOut}=useContext(AuthContext);

  const logoutHandle=()=>{
    userLogOut()
    .then(result=>{

    })
    .catch(error=>{
      console.log(error)
    })
  }
    return (
        <Navbar className='sticky-top ' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className='p-2' >
                 <h4><Link className='text-decoration-none fw-semibold' to='/'>American <span className='text-warning'>Chef's</span> </Link></h4>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
           
            <Nav  className="mx-auto">

              
             <div className='d-flex align-items-center justify-content-center'>
             <h5><Link to='/' className='text-decoration-none ms-4 fw-semibold' >Home</Link></h5>

              <h5><Link to='/blog' className='text-decoration-none ms-4 fw-semibold' >Blog</Link></h5>
             </div>
             {/* <p><img src={user?.photoURL} alt="" /></p> */}

          <div className='ms-5'>
          {   user?
          <p><img  className='' style={{width:'50px',height:"50px",borderRadius:"100%"}} src={user?.photoURL} alt="" /></p>:<></>
          }
          </div>
              


            </Nav>
            <Nav>
            {
              user?<><button onClick={logoutHandle} className='btn btn-info p-2  rounded text-white fe-semibold'style={{width:"120px"}}>Logout</button></>:<> <Link to='/login'><button className='btn btn-primary p-2 rounded text-white fe-semibold  'style={{width:"120px"}}>Login</button></Link></>
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;