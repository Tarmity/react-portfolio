import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './CardPort.css'

const CardPort = () => {

    return (

        <Card style={{ width: '18rem', marginTop: '50px' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
                <Card.Link style={{ marginRight: '60px' }}href="#">GitHub Repo</Card.Link>
                <Card.Link href="#">Website</Card.Link>
            </Card.Body>
        </Card>

    )
}

export default CardPort;