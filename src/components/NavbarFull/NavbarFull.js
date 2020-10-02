import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import "./NavbarFull.css";

const NavbarFull = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbarColor">
                <Navbar.Brand href="#home"><a className="navText">Tarmity Flassman</a></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features"><a className="navLink">Portfolio</a></Nav.Link>
                        <Nav.Link href="#pricing"><a className="navLink">Bio</a></Nav.Link>
                        <Nav.Link href="#deets"><a className="navLink">Resume</a></Nav.Link>
                        <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">LinkdIn</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">GitHub</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Directly</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

export default NavbarFull;