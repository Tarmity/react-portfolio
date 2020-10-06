import React from 'react';
import { Jumbotron, Container, Button, Image } from 'react-bootstrap/';
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
                    <Button to="/port" variant="outline-info" >My Work</Button>{' '}
                    <br />
                    <Image src={require('./img/TarmityLogo2.png')}/>
                </div>
            </Container>
            
        </Jumbotron>
    )
}

export default Jumbo;