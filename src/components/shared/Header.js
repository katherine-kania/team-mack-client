import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, useParams } from 'react-router-dom'
import ShowProfile from '../Profile/ShowProfile'

const linkStyle = {
  color: 'whitesmoke',
  textDecoration: 'none',
  fontFamily: 'Catamaran',
  fontWeight: 'bold',
  paddingLeft: '2em'
}


const authenticatedOptions = (
  <>
    <Nav.Item className="m-2">
      <Link to='/search' style={linkStyle}>SEARCH</Link>
    </Nav.Item>
    <Nav.Item className="m-2">
      <Link to='favorites' style={linkStyle}>FAVORITES</Link>
    </Nav.Item>
    <Nav.Item className="m-2">
      <Link to='change-password' style={linkStyle}>CHANGE PASSWORD</Link>
    </Nav.Item>
    <Nav.Item className="m-2" >
      <Link to='sign-out' style={linkStyle}> SIGN OUT</Link>
    </Nav.Item>
  </>
)

const unauthenticatedOptions = (
  <>
  </>
)


const Header = ({ user }) => (
  <Navbar>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand>
      <Link to="/search" className="logo">
        something musical
      </Link>
    </Navbar.Brand>
    <Navbar.Collapse className="basic-navbar-nav" style={linkStyle}>
      {user ? authenticatedOptions : unauthenticatedOptions}
    </Navbar.Collapse>
  </Navbar>
)
export default Header
