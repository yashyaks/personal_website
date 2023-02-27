import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from 'react-bootstrap/Navbar';
import Logo from "../Navbar/favicon.png"
import './Navbar.css'

export default function Navigation() {
  return (
    <div className='navBar'>
      <NavBar bg="myYellow" variant='light'>
        <NavBar.Brand>
          <img  src={Logo} alt="yashyaks"/>
          <span className='name'>Yash Thakar</span>
        </NavBar.Brand>
      </NavBar>
    </div>

  )
}
