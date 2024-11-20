import React,{useState} from 'react'
import Helmet from '../Componests/Helmet/Helmet'
import { Container,Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../Style/login.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebaseConfig'


const SignUp= () => {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [file, setFile] = useState(null);
  const [loading,setLoading] = useState(false)

  const sign = async(e)=>{
    e.preventDefault()
    setLoading(true)

    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user
        console.log(user)
    }catch(error){

    }
  } 

  return <Helmet>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
          <h3 className="fw-bold mb-4">SignUp</h3>

          <form action="" className="auth_form" onSubmit={SignUp}>
          <FormGroup className='form_group'>
            <input type="text" placeholder='UserName' value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </FormGroup>

            <FormGroup className='form_group'>
            <input type="email"placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </FormGroup>

            <FormGroup className='form_group'>
            <input type="password" placeholder='Enter Your Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </FormGroup>

            <FormGroup className='form_group'>
            <input type="file" onChange={(e)=> setFile(e.target.files[0])}/>
            </FormGroup>


            <button type='Submit' className="buy_btn auth_btn">Create an Account</button>
            <p>Already have an account? <Link to='/Login'>Login</Link></p>
          </form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default SignUp