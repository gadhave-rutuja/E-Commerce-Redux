import React,{useState} from 'react'
import Helmet from '../Componests/Helmet/Helmet'
import { Container,Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../Style/login.css';

const Login= () => {

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  return <Helmet>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
          <h3 className="fw-bold mb-4">Login</h3>

          <form action="" className="auth_form">
            <FormGroup className='form_group'>
            <input type="email"placeholder="Enter Your Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </FormGroup>


            <FormGroup className='form_group'>
            <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </FormGroup>

            <button type='Submit' className="buy_btn auth_btn">Login</button>
            <p>Don't have an account? <Link to='/SignUp'> Create  an account</Link></p>
          </form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login