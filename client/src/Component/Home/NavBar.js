import React from 'react';
import { Navbar, Dropdown, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img className='mr-1'
          src='https://www.freepnglogos.com/uploads/nature-png/natural-health-logos-32.png'
          width='35px' />Agricom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Contacts</Nav.Link>
          </Nav>
          <NavDropdown alignRight noCaret id="dropdown-no-caret" className="p-0 noCaret"
            title={
              <img className="m-0 rounded-circle p-0 "
                width="35px"
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQheGtOjDugQL_DtA6EDn5no8Hn5jnJNKJOdqoYwRXQJ6E24-fW&usqp=CAU'
                alt="user pic" />}
            id={`dropdown-button-drop`}
            drop=''>
            <NavDropdown.Item href="#action/3.1">
              <Button className='mr-3' variant="outline-success">Signin</Button>
              <Button variant="outline-success">Signup</Button>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
          <Form inline>
            <FormControl variant="outline-success" type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </>

  );

}