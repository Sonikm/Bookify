import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/book/list'>Add Listing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation