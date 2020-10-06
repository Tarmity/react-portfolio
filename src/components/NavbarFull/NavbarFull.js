import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import { Link } from "react-router-dom";
import "./NavbarFull.css";


const NavbarFull = () => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg"  variant="dark" className="navbarColor">
                <Navbar.Brand ><h6 className="navText"><Link to="/" style={{color: '#1BA098'}}>Tarmity Flassman</Link></h6></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link ><h6 className="navLink"><Link to="/port" style={{color: '#1BA098'}}>Portfolio</Link></h6></Nav.Link>
                        <Nav.Link ><h6 className="navLink"><Link to="/bio" style={{color: '#1BA098'}}>Bio</Link></h6></Nav.Link>
                        <Nav.Link ><h6 className="navLink"><Link to="/resume" style={{color: '#1BA098'}}>Resume</Link></h6></Nav.Link>
                        <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://www.linkedin.com/in/tarmity-flassman-403079b7/" target="blank" style={{color: '#1BA098'}}>LinkdIn</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/Tarmity" target="blank" style={{color: '#1BA098'}}>GitHub</NavDropdown.Item>
                            <NavDropdown.Item><Link to="/contact" style={{color: '#1BA098'}}>Directly</Link></NavDropdown.Item>
                      </NavDropdown>
                    </Nav> 
                 </Navbar.Collapse> 
            </Navbar>

        </>
    )
}

export default NavbarFull;