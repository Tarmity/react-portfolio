import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import "./NavbarFull.css";

const NavbarFull = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  variant="dark" className="navbarColor">
                <Navbar.Brand href="#home"><h8 className="navText">Tarmity Flassman</h8></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features"><h8 className="navLink">Portfolio</h8></Nav.Link>
                        <Nav.Link href="#pricing"><h8 className="navLink">Bio</h8></Nav.Link>
                        <Nav.Link href="#deets"><h8 className="navLink">Resume</h8></Nav.Link>
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