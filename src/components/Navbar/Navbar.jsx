import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Logo from "../Navbar/favicon.png"
import './Navbar.css'

export default function Navigation() {
  return (
    <div className='navBar'>
      <Navbar bg="myYellow" variant='light' fixed="top" expand="lg" collapseOnSelect>
        <Navbar.Brand>
          <img  src={Logo} alt="yashyaks"/>
          <span className='name'>Yash Thakar</span>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='right-aligned'>
          <Nav>
            <Nav.Link href="#">Projects</Nav.Link>
            <Nav.Link href="#">Experience</Nav.Link>
            <Nav.Link href="#">Skills</Nav.Link>
            <Nav.Link href="#">Education</Nav.Link>
            <Nav.Link href="#">Achievements</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="https://yashyaks.hashnode.dev/" target = "_blank">Blog</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      
      </Navbar>
    </div>

  )
}
