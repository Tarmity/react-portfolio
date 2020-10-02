import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import "./NavbarFull.css";


const NavbarFull = () => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg"  variant="dark" className="navbarColor">
                <Navbar.Brand href="/"><h8 className="navText">Tarmity Flassman</h8></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/portfolio"><h8 className="navLink">Portfolio</h8></Nav.Link>
                        <Nav.Link href="/bio"><h8 className="navLink">Bio</h8></Nav.Link>
                        <Nav.Link href="/resume"><h8 className="navLink">Resume</h8></Nav.Link>
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