import React from 'react'
import { Row, Col } from 'react-bootstrap';

export default function VisaCard({ cardHolder, cardNumber, ExpirationMM, ExpirationYY, CVV, CVVFocus }) {
    return (
        <div className='cardWrapper'>
            <div className={CVVFocus ? 'visaCard flipCard' : 'visaCard'}>
                <div className='front'>
                    <Row>
                        <Col><div className='visaSquare' /></Col>
                        <Col className='d-flex justify-content-end'><img src="https://worldcityweb.com/wp-content/uploads/2019/08/visa-5-logo-black-and-white.png" alt="" /></Col>
                    </Row>
                    <Row>
                        <p>{cardNumber}</p>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Card Holder</h3>
                            <span className='cardHolderName'>{cardHolder}</span>
                        </Col>
                        <Col className='expiration'>
                            <h3>Expires</h3>
                            <span>{ExpirationMM} {ExpirationYY}</span>
                        </Col>
                    </Row>
                </div>
                <div className='back'>
                    <hr />
                    <div className='content'>
                        <h3>CVV</h3>
                        <p>{CVV}</p>
                        <img src="https://worldcityweb.com/wp-content/uploads/2019/08/visa-5-logo-black-and-white.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
