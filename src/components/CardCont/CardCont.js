import React from 'react';
import { Media, } from 'react-bootstrap';
import './img/email.png';
import './img/phone.png';




const CardCont = (props) => {


    return (
        <>
            <Media style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '200px', width: '800px', backgroundColor: '#DEB992' }}>
                <img
                    width={200}
                    height={200}
                    className="mr-3"
                    src= {props.image}
                    alt="Generic placeholder"
                />
                <Media.Body style={{ textAlign: 'center', marginTop: '20px', }}>
                    <h5 style={{fontSize: '50px'}}>{props.title}</h5>
                    <p style={{fontSize: '30px'}}>
                        <br />
                    {props.contmeth}
                    </p>
                </Media.Body>
            </Media>

            <Media style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '200px', width: '800px', backgroundColor: '#DEB992' }}>
                <img
                    width={200}
                    height={200}
                    className="mr-3"
                    src={require('./img/email.png')}
                    alt="Generic placeholder"
                />
                <Media.Body style={{ textAlign: 'center', marginTop: '20px',  }}>
                    <h5 style={{fontSize: '50px'}}>Email Me</h5>
                    <p style={{fontSize: '30px'}}>
                        <br />
                    tarmity.flassman@gmail.com
                    </p>
                </Media.Body>
            </Media>
        </>


    )
}

export default CardCont;
