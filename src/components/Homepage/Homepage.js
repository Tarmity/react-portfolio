import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap/';
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
                    <Button variant="outline-info">My Work</Button>{' '}
                </div>
            </Container>
            
        </Jumbotron>
    )
}

export default Jumbo;