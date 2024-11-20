import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../Componests/Helmet/Helmet';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products'

import Services from '../services/services';
import ProductList from '../Componests/UI/ProductList';
import Clock from '../Componests/UI/Clock';
import '../Style/home.css';

import counterImg from "../assets/images/counter-timer-img.png";
import heroImg from "../assets/images/hero-img.png"

const Home = () => {
  const [trendingproducts, setTrendingproducts] =useState([]);
  const [bestSalesProducts, setBestSalesProducts] =useState([]);
  const [mobileProducts, setMobileProducts] =useState([]);
  const [wirelessProducts, setWirelessProducts] =useState([]);
  const [popularProducts, setPopularProducts] =useState([]);


useEffect(()=>{
  const filteredTrendingproducts =products.filter(item=> item.category == 'chair');

  const filteredBestSalesProducts =products.filter(item=> item.category == 'sofa');

  const filteredMobileProducts =products.filter(item=> item.category == 'mobile');


  const filteredWirelessProducts =products.filter(item=> item.category == 'wireless');

  const filteredPopularProducts =products.filter(item=> item.category == 'watch');


  setTrendingproducts(filteredTrendingproducts);
  setBestSalesProducts(filteredBestSalesProducts);
  setMobileProducts(filteredMobileProducts);
  setWirelessProducts(filteredWirelessProducts);
  setPopularProducts(filteredPopularProducts);


}, []);

  const year = new Date().getFullYear();
  return <Helmet title={'Home'}>
    {/* home section */}


    <section className="hero_section">
         <Container>
           <Row>
             <Col lg='6' md='6'>
             <div className="hero_content">
                 <p className="hero_subtitle">
                   Trending Product in {year}
                 </p>
                 <h2>Make  Your Interior More Minimalistics & Modern</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere fuga animi ducimus enim non quas sequi quo quasi, sunt dolores!</p>
                 <motion.button whileTap={{scale: 1.2}} className="buy_btn"><Link to='/shop' className='text-decoration-none'>SHOP NOW</Link></motion.button>
             </div>
             </Col>
             <Col lg='6' md='6'>
               <div className="hero_img">
                 <img src={heroImg} alt="" />
               </div>
             </Col>



           </Row>
         </Container>
       </section>
        
       <Services/>

      {/* trinding product section */}
       <section className="trending_products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
            <h2 className='section_title'>Trending Products</h2>
            </Col>
            <ProductList data={trendingproducts}/>
          </Row>
        </Container>
       </section>

       {/* best selaes section */}

       <section className="best_sales">
        <Container>
        <Row>
            <Col lg='12' className='text-center'>
            <h2 className='section_title'>Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts}/>
          </Row>
        </Container>
       </section>

       {/* timer count section */}

       <section className="timer-count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down-col'>
            <div className="clock_top-content">
              <h4 className='text-white fs-6  mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5  mb-3'>Quality Armchair</h3>
            </div>
              <Clock/>

              <motion.button whileTap={{scale:1.2}} className="buy_btn store_btn"><Link to='/shop' className='text-decoration-none'>Visit Store</Link></motion.button>
            </Col>

            <Col lg='6' md='12' className='text-end counter_img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
       </section>

       <section className="new_arrivals">
        <Container>
          <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section_title'>New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts}/>
            <ProductList data={wirelessProducts}/>
          </Row>
        </Container>
       </section>

       <section className="popular_category">
       <Container>
          <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts}/>
          </Row>
        </Container>
       </section>

  </Helmet>;
  
}

export default Home