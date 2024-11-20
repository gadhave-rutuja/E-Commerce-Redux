import React from 'react'

import { Container, Row, Col,FormGroup } from 'reactstrap';
import Helemet from "../Componests/Helmet/Helmet"
 
import CommonSection from "../Componests/UI/CommonSection"

import '../Style/checkout.css';
import { useSelector } from 'react-redux';

 const CheckOut = () => {

const totalQty = useSelector((state)=> state.cart.totalQuantity)
const totalAmount = useSelector((state)=>state.cart.totalAmount);








  return <Helemet title='CheckOut'>
    <CommonSection title='CheckOut'/>
    <section>
    <Container>
      <Row>
      <Col lg='8'>
      <h6 className='mb-4 fw-bold'>Billing Information</h6>
      <form action="" className='billing_form'>
        <FormGroup className="form_group">
          <input type="text" placeholder='Enter Your Name'/>
        </FormGroup>

        <FormGroup className="form_group">
          <input type="email" placeholder='Enter Your Email id'/>
        </FormGroup>

        <FormGroup className="form_group">
          <input type="number" placeholder='Mobile No.'/>
        </FormGroup>

        <FormGroup className="form_group">
          <input type="text" placeholder='Street Address'/>
        </FormGroup>

        <FormGroup className="form_group">
          <input type="text" placeholder='Postal Code'/>
        </FormGroup>

        <FormGroup className="form_group">
          <input type="text" placeholder='Country'/>
        </FormGroup>
      </form>
      </Col>

      <Col lg='4'>
      <div className="checkout_cart">
        <h6>Total Qty : <span>{totalQty} items</span></h6>

        <h6>Subtotal : <span>${totalAmount}</span></h6>
        <h6><span>
          Shopping : <br />Free Shopping</span> <span>$0</span></h6>
        <h4>Total Coast : <span>${totalAmount}</span></h4>
        <button className="buy_btn auth_btn w-100 bg-white text-dark mt-4">Place an Order</button>
      </div>
      </Col>
      </Row>
    </Container>
    </section>
  </Helemet>
}

export default CheckOut;
