import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header(){

    return(

       <Navbar>
       <Navbar.Header>
        <Navbar.Brand>
            GitHub Searcher
        </Navbar.Brand>
       </Navbar.Header>
       <Nav>
       <Nav.Item href="#">Login</Nav.Item>
       </Nav>
       </Navbar>

   
    )
}

export default Header ;