import React from 'react'

import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import logo from "../../assets/images/eco-logo.png";

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
          <div className="logo">
              
              <div>
                <h1 className='text-white'>Multimart</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, quam obcaecati. Ratione, aliquid dignissimos. Inventore autem eius neque minima minus.
              </p>
          </Col>
          <Col lg='3' md='3' className='mb-4'>
          <div className="footer_quick-link">
            <h4 className="quick_links-title">Top Categories</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#' className='text-decoration-none'>Mobile Phones</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#' className='text-decoration-none'>Morden Sofa</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#' className='text-decoration-none'>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#' className='text-decoration-none'>Smart Watches</Link>
              </ListGroupItem>
          
            </ListGroup>
          </div>
          </Col>
          <Col lg='2' md='3' className='mb-4'>
          <div className="footer_quick-link">
            <h4 className="quick_links-title">Usefull Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop' className='text-decoration-none'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart' className='text-decoration-none'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login' className='text-decoration-none'>Login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#' className='text-decoration-none'>Privacy Policy</Link>
              </ListGroupItem>
          
            </ListGroup>
          </div>
          </Col>
          <Col lg='3' md='4'>
          <div className="footer_quick-link">
            <h4 className="quick_links-title">Contacts</h4>
            <ListGroup className='footer_contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>123 Om Sakshi Corner, Pashan, Pune, Maharashtra 411021 </p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
              <span><i class="ri-phone-line"></i></span>
              <p>+0881234567890</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
              <span><i class="ri-mail-line"></i></span>
              <p>example123@gmail.com</p>
              </ListGroupItem>
          
            </ListGroup>
          </div>
          </Col>
          <Col lg='12'>
          <p className="footer_copyright">Copyright {year} developed by rutujagadhave. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer