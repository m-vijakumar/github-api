import React from 'react';
import {Navbar , Nav } from 'react-bootstrap'


function Header(props){



 const  onLogin =()=>{

      props.onLogin();
  }
    return(

        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link    href="#link" onClick ={ () => onLogin() } >Login</Nav.Link>
           
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>

   
    )
}

export default Header ;