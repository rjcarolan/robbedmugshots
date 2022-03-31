import React from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import logo from './Resources/mug.png'

export const Header = () => {
  return (
    <Navbar className='header'>
      <Container>
        <Navbar.Brand >
          <img
            src={logo}
            className="logo"
            alt="React Bootstrap logo"
          />{' '}
          Robbed Mug Shots
        </Navbar.Brand>{' '}
        <Nav className = 'header-text'>
          <NavLink href = '#home' className='header-text'>Questions?</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}
