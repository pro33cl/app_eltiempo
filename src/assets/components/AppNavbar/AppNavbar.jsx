import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppNavbar = (props) => {


    /*  ---INDICE--- 
    1.- PROPS
    2.- DECLARACIÓN VARIABLES
    3.- DECLARACIÓN ESTADOS
    4.- REFERENCIAS useRef()
    5.- EFECTOS SECUNDARIOS
    6.- FUNCIONES API
    7.- HANDLERS
    8.- FUNCIONES
    9.- RETURN
    */

    /* ---PROPS--- */

    const {handlerNavbar}= props;

    /* ---DECLARACIÓN VARIABLES--- */

    /* ---DECLARACIÓN ESTADOS--- */
    
    /* ---REFERENCIAS useRef()--- */

    /* ---EFECTOS SECUNDARIOS--- */

    /* ---FUNCIONES API--- */

    /* ---HANDLERS--- */

    /* ---FUNCIONES--- */

    /* ---RETURN--- */

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