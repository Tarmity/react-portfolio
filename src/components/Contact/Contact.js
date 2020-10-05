import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CardCont from '../CardCont/CardCont';
import contmeths from "./contact.json";


class Contact extends Component {

    state = {
        contmeths
    };


    render() {
        return (
            <Container>
                {this.state.contmeths.map(contmeth => (
                    <CardCont
                        key={contmeth.id}
                        image={contmeth.image}
                        title={contmeth.title}
                        details={contmeth.details}
                    />
                ))}

            </Container>
        )
    }
};



export default Contact;