import React from 'react';
import { Media, } from 'react-bootstrap';
import './img/HobbyConnect.png';




const CardCont = () => {


    return (
        <>
            <Media style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '200px', width: '800px', backgroundColor: '#DEB992' }}>
                <img
                    width={200}
                    height={200}
                    className="mr-3"
                    src={require('./img/HobbyConnect.png')}
                    alt="Generic placeholder"
                />
                <Media.Body style={{ textAlign: 'center', marginTop: '20px', }}>
                    <h5 style={{fontSize: '50px'}}>Call Me</h5>
                    <p style={{fontSize: '30px'}}>
                        <br />
                    +61409298471
                </p>
                </Media.Body>
            </Media>

            <Media style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '200px', width: '800px', backgroundColor: '#DEB992' }}>
                <img
                    width={200}
                    height={200}
                    className="mr-3"
                    src={require('./img/HobbyConnect.png')}
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
