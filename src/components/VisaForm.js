import { Row, Col } from 'react-bootstrap';

const generateYearOptions = () => {
    const yearOptions = [];
    const startYear = 1980;
    const endYear = new Date().getFullYear();
    for (let i = endYear; i >= startYear; i--) {
        yearOptions.push(<option value={i} key={i}>{i}</option>);
    }
    return yearOptions;
};
const generateMonthsOptions = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        monthsOptions = [];
    for (let i = 0; i < months.length; ++i) {
        monthsOptions.push(<option value={months[i]} key={i}>{months[i]}</option>);
    }
    return monthsOptions;
};
export default function VisaForm({ setCardNumber, setCardHolder, setExpirationMM, setExpirationYY, setCVV, setCVVFocus }) {
    let cvvFocus = () => {
        setCVVFocus(true)
    },
        cvvBlur = () => {
            setCVVFocus(false)
        }
    return (
        <form>
            <Row>
                <Col className='form-col'>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="number" name="cardNumber" id="cardNumber" onChange={e => { setCardNumber(e.target.value) }} />
                </Col>
            </Row>

            <Row>
                <Col className='form-col'>
                    <label htmlFor="cardHolder">Card Holder</label>
                    <input type="text" name="cardHolder" id="cardHolder" onChange={e => { setCardHolder(e.target.value) }} />
                </Col>
            </Row>
            <Row>
                <Col md={4} sm={12} className='form-col'>
                    <label htmlFor="exMonth">Expiration MM</label>
                    <select id="month" name="month" onChange={e => { setExpirationMM(e.target.value) }} >
                        <option>Month</option>
                        {generateMonthsOptions()}
                    </select>
                </Col>
                <Col md={4} sm={12} className='form-col'>
                    <label htmlFor="exYear">Expiration YY</label>
                    <select id="year" name="year" onChange={e => { setExpirationYY(e.target.value) }} >
                        <option>Year</option>
                        {generateYearOptions()}
                    </select>
                </Col>
                <Col md={4} sm={12} className='form-col'>
                    <label htmlFor="exMonth">CVV</label>
                    <input type="number" name="CVV" id="CVV" onChange={e => { setCVV(e.target.value) }} onFocus={cvvFocus} onBlur={cvvBlur} />
                </Col>
            </Row>
            <Row>
                <button type="">Submit</button>
            </Row>
        </form>
    )
}
