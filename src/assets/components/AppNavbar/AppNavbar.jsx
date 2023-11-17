import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppNavbar = (props) => {

    const {handlerNavbar}= props;


  return (
    
    <Navbar expand="lg" bg="secondary" data-bs-theme="dark" style={{width:"100%"}} className='m-0 p-3'>
      <Container>
        <Navbar.Brand href="#">
            <img
              alt=""
              src="../public/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            El Tiempo
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handlerNavbar} id='inicio'>Inicio</Nav.Link>
            <Nav.Link onClick={handlerNavbar} id='contacto'>Contacto</Nav.Link>
            <Nav.Link onClick={handlerNavbar} id='sabermas'>Saber más</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar