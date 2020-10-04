import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardPort from '../CardPort/CardPort';


const Portfolio = () => {

    return (
        <>
            <Container > 
                <Row>
                    <Col>
                        <CardPort />
                    </Col>
                    <Col>
                        <CardPort />
                    </Col>
                    <Col>
                        <CardPort />
                    </Col>
                </Row>
            </Container>

            <Container >
                <Row>
                    <Col>
                        <CardPort />
                    </Col>
                    <Col>
                        <CardPort />
                    </Col>
                    <Col>
                        <CardPort />
                    </Col>
                </Row>
            </Container>
        </>
    )
};



export default Portfolio;