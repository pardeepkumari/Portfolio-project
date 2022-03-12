import React from 'react'
import './Navbar.css';
import { Navbar, Container, Nav,Button } from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';




export default function NewNavbar() {
  const navigate=useNavigate();

  const handleLogout =()=>{
    window.localStorage.clear();
     navigate('/login');
  }
  return (
    <>
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="#">NEW COLLECTIONS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Product_page">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about_page">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Contact_page">Contact</a>
              </li>
              
              </ul>
            
                <div className='buttons'>
                <a to="/login" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i> Login</a>
                <a to="/register" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i> Register</a>
                <a to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i> Cart (0)</a>

               </div> 
          </div>
        </div>
      </nav> */}

      {/* <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand as={Link} to="/">Project</Navbar.Brand>
                 <Nav className="me-auto">
                 <Nav.Link as={Link} to="/">Home</Nav.Link>
                 <Nav.Link as={Link} to="/about_Page">About</Nav.Link>
                 <Nav.Link as={Link} to="/Product_page">Product</Nav.Link>
                 <Button variant="outline-success">Search</Button> 
                 </Nav>
               </Container>
          </Navbar> */}

      <Navbar bg="light" expand="lg">
  <Container className='myclass'>
   
    <Navbar.Brand  to="#">NEW COLLECTIONS</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/">Home</Nav.Link>
                 
                
                 <Nav.Link as={Link} to="/about_Page">About</Nav.Link>
                 {/* <Nav.Link as={Link} to="/Services">Services</Nav.Link> */}
                 <Nav.Link as={Link} to="/Contact_page">Contact</Nav.Link>
                 <Nav.Link as={Link} to="/login">Login</Nav.Link>
                 <Nav.Link as={Link} to="/Register">Register</Nav.Link>
                 <button onClick={handleLogout}>Logout</button>
                 
      {/* </Nav> */}
      </Nav>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        /> */}
       {/* <Button variant="outline-success">Search</Button>  */}
        {/* <div className='buttons'> */}
          {/* <button type="submit">login</button> */}
                 {/* <a to="/login" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i> Login</a> 
                <a to="/register" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i> Register</a>
                <a to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i> Cart (0)</a> */}

               {/* </div>    */}
      {/* </Form> */}
        </Navbar.Collapse>
  </Container>
</Navbar>  


      
    </>
  );
};
