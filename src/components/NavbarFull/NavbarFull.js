import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import { Link } from "react-router-dom";
import "./NavbarFull.css";


const NavbarFull = () => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg"  variant="dark" className="navbarColor">
                <Navbar.Brand ><h6 className="navText">Tarmity Flassman</h6></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href><h6 className="navLink"><Link to="/port">Portfolio</Link></h6></Nav.Link>
                        <Nav.Link ><h6 className="navLink"><Link to="/bio">Bio</Link></h6></Nav.Link>
                        <Nav.Link ><h6 className="navLink"><Link to="/resume">Resume</Link></h6></Nav.Link>
                        <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://www.linkedin.com/in/tarmity-flassman-403079b7/" target="blank">LinkdIn</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/Tarmity" target="blank">GitHub</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">Directly</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

export default NavbarFull;