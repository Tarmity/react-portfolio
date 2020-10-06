import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import "./NavbarFull.css";


const NavbarFull = () => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg"  variant="dark" className="navbarColor">
                <Navbar.Brand href="/"><h6 className="navText">Tarmity Flassman</h6></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/port"><h6 className="navLink">Portfolio</h6></Nav.Link>
                        <Nav.Link href="/bio"><h6 className="navLink">Bio</h6></Nav.Link>
                        <Nav.Link href="/resume"><h6 className="navLink">Resume</h6></Nav.Link>
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