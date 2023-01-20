import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import './App.css';
import VisaCard from './components/VisaCard'
import VisaForm from './components/VisaForm'
function App() {
  const [cardNumber, setCardNumber] = useState('##########');
  const [cardHolder, setCardHolder] = useState('Full Name');
  const [ExpirationMM, setExpirationMM] = useState('MM');
  const [ExpirationYY, setExpirationYY] = useState('YY');
  const [CVV, setCVV] = useState();
  const [CVVFocus, setCVVFocus] = useState(false)
  document.body.style = 'background: #E5E0FF;';
  return (
    <div className="App">
      <Container >
        <div className='main'>
          <VisaCard cardNumber={cardNumber}
            cardHolder={cardHolder}
            ExpirationMM={ExpirationMM}
            ExpirationYY={ExpirationYY}
            CVV={CVV}
            CVVFocus={CVVFocus}
          />
          <VisaForm setCardNumber={setCardNumber}
            setCardHolder={setCardHolder}
            setExpirationMM={setExpirationMM}
            setExpirationYY={setExpirationYY}
            setCVV={setCVV}
            setCVVFocus={setCVVFocus}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
