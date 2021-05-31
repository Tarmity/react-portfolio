import React from "react";
import { Navbar, } from 'react-bootstrap/';
import "./Footer.css";


const Footer = () => {
    return (

        <Navbar sticky="bottom" style={{ justifyContent: "center", marginTop: '80px' }}>
            <h5 className="footerText">Copyright 2020 Tarmity Flassman </h5>
        </Navbar>
        // <nav className="navbar fixed-bottom footerColor">
        //     
        // </nav>

    )
}

export default Footer;