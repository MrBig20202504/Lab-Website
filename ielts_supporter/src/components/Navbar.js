import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Stack } from 'react-bootstrap';

function NavbarHeader() {

    return (
        <header>
            {/* <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        ISP
                        <i class='fa-solid fa-book' />
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa-solid fa-x' : 'fa-solid fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/Listening'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Listening
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/Reading'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Reading
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/Writing'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Writing
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/Speaking'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Speaking
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav> */}
            <nav>
                <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="/">ISP
                            <i class='fa-solid fa-book'  /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/sign-up">Sign in</Nav.Link>
                                <NavDropdown title="Exercise" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/Listening">Listening</NavDropdown.Item>
                                    <NavDropdown.Item href="/Reading">Reading</NavDropdown.Item>
                                    <NavDropdown.Item href="/Writing">Writing</NavDropdown.Item>
                                    <NavDropdown.Item href="/Speaking">Speaking</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/sign-up">Log in</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </nav>
        </header>
    );
}

export default NavbarHeader;