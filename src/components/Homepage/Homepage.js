import React from 'react';
import { Jumbotron, Container, Button, Image} from 'react-bootstrap/';
import "./Homepage.css";


const Jumbo = () => {
    return (

        <Jumbotron fluid className="jumbo" >
            <Container>
                <div className="jumboText">
                    <p>_________________________________</p>
                    <h1 className="jumboTexth1">MEET TARMITY</h1>
                    <p>A Full-Stack Developer.</p>
                    <Button variant="outline-info">My Work</Button>{' '}
                </div>
            </Container>
            
        </Jumbotron>
    )
}

export default Jumbo;