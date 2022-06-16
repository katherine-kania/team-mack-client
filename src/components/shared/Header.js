import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, useParams } from 'react-router-dom'
import ShowProfile from '../Profile/ShowProfile'

const linkStyle = {
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  background: 'rgb(50, 50, 80)',
  textAlign: 'center',
  color: 'whitesmoke',
  width: '100%'
}


const authenticatedOptions = (
  <div>
    <NavDropdown
      title="EXPLORE YOUR OPTIONS"
      className='landingMessage'
    >
      <Link to="/search" style={linkStyle}>
        Search
      </Link>{' '}
      <br />
      <Link to="/favorites" style={linkStyle}>
        My favorite picks
      </Link>{' '}
      <br />
      <Link to="change-password" style={linkStyle}>
        Change Password
      </Link>
      <br />
      <Link to="sign-out" style={linkStyle}>
        Sign Out
      </Link>
      <br />
      <Link to="profile" style={linkStyle}>
        Profile
      </Link>
      <br />
    </NavDropdown>
  </div>
)

const unauthenticatedOptions = (
  <>
  </>
)


const Header = ({ user }) => (
  <Navbar style={linkStyle}>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand>
      <Link to="/search" className="logo">
        something musical
      </Link>
    </Navbar.Brand>
    <Navbar.Collapse className="basic-navbar-nav">
      {user ? authenticatedOptions : unauthenticatedOptions}
    </Navbar.Collapse>
  </Navbar>
)
export default Header
