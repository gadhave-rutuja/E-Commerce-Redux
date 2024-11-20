import React from 'react'
import '../Style/cart.css'
import { Link } from 'react-router-dom'
import Helmet from '../Componests/Helmet/Helmet'
import CommonSection from '../Componests/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import {cartAction} from '../redux/Slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
// import { h2, table } from 'framer-motion/client'


 const Cart = () => {
  
const cartItem = useSelector((state)=>state.cart.cartItem)
const totalAmount =useSelector((state)=>state.cart.totalAmount)

  return <Helmet title='Cart'>
    <CommonSection title='Shopping Cart'/>
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItem.length == 0 ? (
                  <h2 className='fs-4 text-center'>No Item added to the Cart</h2>
                ) : (
                  <table className='table bordered'>
                    <thead>
                      <tr>
                        <th>Images</th>
                        <th>Title</th>
                        <th>Prices</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        cartItem.map((item, index)=>(
                          <Tr item={item} key={index}/>
                        ))
                      }
                    </tbody>
                  </table>
                )
              }


            </Col>

            <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>SubTotal
              <span className='fs-4 fw-bold'>${totalAmount}</span>
              </h6>
             
            </div>
            <p className='fs-6 mt-2'>Taxes and shipping will calculate in checkout</p>
            <div>
            
              <button className="buy_btn w-100"><Link className='text-decoration-none' to='/CheckOut'>Checkout</Link></button>


              <button className="buy_btn w-100 mt-4"><Link className='text-decoration-none' to='/shop'>Continue Shopping</Link></button>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
  </Helmet>
}

const Tr = ({item}) =>{

  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartAction.deleteItem(item.id))
  }

  return ( <tr>
  <td><img src={item.imgUrl} alt="" /></td>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>{item.quantity}px</td>
  <td >
    <motion.i whileTap={{scale: 1.2}} onClick={deleteProduct} class="ri-delete-bin-line">
      </motion.i>
      </td>
</tr>
  );
} 

export default Cart
