import React from 'react';
import { Card, } from 'react-bootstrap';
import './CardPort.css'

const CardPort = () => {

    return (

        <Card className="cardBody" style={{ width: '18rem', marginTop: '50px' }}>
            <Card.Img variant="top" src={require('./img/HobbyConnect.png')} />
            <Card.Body className="cardBody">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <Card.Body className="cardBody">
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <Card.Body className="cardBody">
                <Card.Link style={{ marginRight: '60px' }}href="#"><strong>GitHub Repo</strong></Card.Link>
                <Card.Link href="#"><strong>Website</strong></Card.Link>
            </Card.Body>
        </Card>

    )
}

export default CardPort;