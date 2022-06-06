import React from 'react'
import { Link } from "react-router-dom";
import Iconshopcart from '../cartWidget/CartWidget';
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap" 
import "./navBar.scss"
function NavBar() {

  return (
    <>
      <Navbar variant="dark" expand="lg" className='nav__bar--modificacion nav__bar--size nav__bar--color'>
        <Container>
          <Navbar.Brand as={Link} to="/" className='logo3D '>3DShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/carrito"><Iconshopcart/></Nav.Link>
              <NavDropdown title="Categorias" className='categoria' id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/categoria/Hogar" className='categoriasHover'>Hogar</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/Organizadores" className='categoriasHover'>Organizadores</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar


