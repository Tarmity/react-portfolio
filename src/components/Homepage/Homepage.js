import React from 'react';
import { Jumbotron, Container, Button, Image } from 'react-bootstrap/';
import { Link } from "react-router-dom";
import "./Homepage.css";


const Jumbo = () => {
    return (

        <Jumbotron fluid className="jumbo">
            <Container>
                <div className="jumboText">
                    <p>___________________________________</p>
                    <h1 className="jumboTexth1">MEET </h1>
                    <h1 className="jumboTexth1">TARMITY</h1>
                    <p>Full-Stack Developer</p>
                    <Button variant="outline-info" ><Link to="/port">My Work</Link></Button>{' '}
                    <br />
                    <Image src={require('./img/TarmityLogo2.png')}/>
                </div>
            </Container>
            
        </Jumbotron>
    )
}

export default Jumbo;