import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img
            className="logo-img"
            src="./src/assets/imagenes/logo.png"
            alt="logo-web"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-5 my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Nuevo</Nav.Link>
            <Nav.Link href="#action3">Polular</Nav.Link>
            <Nav.Link href="#action4">Deportes</Nav.Link>
            <Nav.Link href="#action4">Series</Nav.Link>
          </Nav>
          <Form className="d-flex form-busqueda ms-4">
            <Form.Control
              type="search"
              placeholder="Busqueda de Películas o Series"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn-buscar" variant="dark">
              Buscar
            </Button>
            {/* Cart Widget */}
            <CartWidget />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
